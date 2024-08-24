const router = require('express').Router()
const db = require('./config/database')


router.get('/posts',(req,res)=>{
    try {
        db.all('SELECT * FROM posts', (err, data) => {
            if (err) {
              return res.status(400).json({ message: 'Unable to retrieve posts' });
            }
            res.status(200).json({ message: 'Success', data });
          });          
    } catch (error) {
        res.status(5000).json({message:`Internal server error : ${error}`})
    }
})
router.get('/posts/:id',(req,res)=>{
    try {
        db.get('SELECT * FROM posts WHERE id = ?', [req.params.id], (err, data) => {
            if (err) {
              return res.status(400).json({ message: 'Unable to retrieve post' });
            }
            res.status(200).json({ message: 'Success', data });
          });          
    } catch (error) {
        res.status(5000).json({message:`Internal server error : ${error}`})
    }
})
router.post('/posts',(req,res)=>{
    try {
        const { title, description } = req.body;
        db.run(
            'INSERT INTO posts (title, description) VALUES (?, ?)',
            [title, description],
            (err) => {
                if (err) {
                    console.error('SQL Error:', err.message); 
                    return res.status(400).json({ message: `Creating post failed: ${err.message}` });
                }
                res.status(201).json({ message: 'Post created successfully' });
            }
        );
    } catch (error) {
        res.status(5000).json({message:`Internal server error : ${error}`})
    }
})
router.put('/posts/:id',(req,res)=>{
    try {
        const { title, description } = req.body;
        db.run(
        'UPDATE posts SET title = ?, description = ? WHERE id = ?',
        [title, description, req.params.id],
        (err) => {
            if (err) {
            return res.status(400).json({ message: 'Updating post failed' });
            }
            res.status(200).json({ message: 'Post updated successfully' });
        });
    } catch (error) {
        res.status(5000).json({message:`Internal server error : ${error}`})
    }
})
router.delete('/posts/:id',(req,res)=>{
    try {
        db.run('DELETE FROM posts WHERE id = ?', [req.params.id], (err) => {
            if (err) {
              return res.status(400).json({ message: 'Deleting post failed' });
            }
            res.status(200).json({ message: 'Post deleted successfully' });
          });          
    } catch (error) {
        res.status(5000).json({message:`Internal server error : ${error}`})
    }
})

module.exports = router