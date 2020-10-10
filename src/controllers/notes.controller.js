const notesCtrl = {};

const pool = require('../database');

notesCtrl.renderAddNote = (req, res) => {
    res.render('notes/add');
};

notesCtrl.addNote = async (req, res) => {
    const {  title, description, url, contact_id, link_id } = req.body;
    const newNote = {
        
        title, 
        description, 
        contact_id,
        link_id,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO notes set ?', [newNote]);
    req.flash('success', 'Conctacto Saved Successfully');
    res.redirect('/notes');
}

notesCtrl.renderNote = async (req, res) => {
    const notes = await pool.query('SELECT * FROM notes WHERE user_id = ?', [req.user.id]);
    res.render('notes/list',  { notes });
}

notesCtrl.renderLinks1 = async (req, res) => {
    const links = await pool.query('SELECT * FROM links WHERE user_id = ?', [req.user.id]);
    const contacts = await pool.query('SELECT * FROM contacts WHERE user_id = ?', [req.user.id]);

    res.render('notes/list1', { links, contacts });
}

// notesCtrl.renderContact = async (req, res) => {
//     const contacts = await pool.query('SELECT * FROM contacts WHERE user_id = ?', [req.user.id]);
//     res.render('notes/list1', { contacts });
// }

notesCtrl.deleteNote = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM notes WHERE ID = ?', [id]);
    req.flash('success', 'contact Removed Successfully');
    res.redirect('/notes');
};

notesCtrl.renderEditNote = async (req, res) => {
    const { id } = req.params;
    const notes = await pool.query('SELECT * FROM notes WHERE id = ?', [id]);
    console.log(notes);
    res.render('notes/edit', {link: notes[0]});
};

notesCtrl.editNote = async (req,res) => {
    const { id } = req.params;
    const { title} = req.body; 
    const newNote = {
        title
    };
    await pool.query('UPDATE notes set ? WHERE id = ?', [newNote, id]);
    req.flash('success', 'contact Updated Successfully');
    res.redirect('/notes');
}

module.exports = notesCtrl;
