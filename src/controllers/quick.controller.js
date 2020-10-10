const quickCtrl = {};

const pool = require('../database');

quickCtrl.renderAddQuick = (req, res) => {
    res.render('quick/add');
};

quickCtrl.addQuick= async (req, res) => {
    const { text } = req.body;
    const newQuick = {
    text,
        user_id: req.user.id
    };
    await pool.query('INSERT quick_notes set ?', [newQuick]);
    req.flash('success', 'Conctacto Saved Successfully');
    res.redirect('/quick');
}

quickCtrl.renderQuick = async (req, res) => {
    const quick = await pool.query('SELECT * FROM quick_notes WHERE user_id = ?', [req.user.id]);
    res.render('quick/list', { quick });
}

quickCtrl.renderQuick1 = async (req, res) => {
    const quick = await pool.query('SELECT * FROM quick_notes WHERE user_id = ?', [req.user.id]);
    res.render('/profile', { quicks });
}

quickCtrl.deleteQuick = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM quick_notes WHERE ID = ?', [id]);
    req.flash('success', 'Quick Removed Successfully');
    res.redirect('/quick');
};

quickCtrl.renderEditQuick = async (req, res) => {
    const { id } = req.params;
    const quick = await pool.query('SELECT * quick_notes quick WHERE id = ?', [id]);
    console.log(quick);
    res.render('quick/edit', {quick: quick[0]});
};

quickCtrl.editQuick = async (req,res) => {
    const { id } = req.params;
    const { text} = req.body; 
    const newQuick = {
        text
    };
    await pool.query('UPDATE quick_notes set ? WHERE id = ?', [newQuick, id]);
    req.flash('success', 'Quick Updated Successfully');
    res.redirect('/quick');
}

module.exports = quickCtrl;