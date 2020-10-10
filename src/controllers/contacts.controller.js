const contactsCtrl = {};

const pool = require('../database');

contactsCtrl.renderAddContact = (req, res) => {
    res.render('contacts/add');
};

contactsCtrl.addContact= async (req, res) => {
    const {  fullname, number, email, t_contact } = req.body;
    const newContact = {
        
        fullname,
        number,
        email,
        t_contact,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO contacts set ?', [newContact]);
    req.flash('success', 'Conctacto Saved Successfully');
    res.redirect('/contacts');
}

contactsCtrl.renderContact = async (req, res) => {
    const contacts = await pool.query('SELECT * FROM contacts WHERE user_id = ?', [req.user.id]);
    res.render('contacts/list', { contacts });
}

contactsCtrl.deleteContact = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM contacts WHERE ID = ?', [id]);
    req.flash('success', 'contact Removed Successfully');
    res.redirect('/contacts');
};

contactsCtrl.renderEditContact = async (req, res) => {
    const { id } = req.params;
    const contacts = await pool.query('SELECT * FROM contacts WHERE id = ?', [id]);
    console.log(contacts);
    res.render('contacts/edit', {contacts: contacts[0]});
};

contactsCtrl.editContact = async (req,res) => {
    const { id } = req.params;
    const { fullname, number, email, t_contact} = req.body; 
    const newContact = {
        fullname,
        number,
        email,
        t_contact     
    };
    await pool.query('UPDATE contacts set ? WHERE id = ?', [newContact, id]);
    req.flash('success', 'contact Updated Successfully');
    res.redirect('/contacts');
}

module.exports = contactsCtrl;