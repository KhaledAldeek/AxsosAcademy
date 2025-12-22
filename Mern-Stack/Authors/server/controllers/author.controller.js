const Author = require("./../models/author.model");

const createNewAuthor = async (req, res) => {
    try {
        await Author.create(req.body);
        res.json({success : true});
    } catch (error) {
        res.json(error);
    }
}

const findAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (error) {
        res.json(error);
    }
}

const findAuthor = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        res.json(author);
    } catch (error) {
        res.json(error);
    }
}

const deleteAuthor = async (req, res) => {
    try {
        await Author.findByIdAndDelete(req.params.id);
        res.json({success : true})
    } catch (error) {
        res.json(error);
    }
}

const updateAuthor = async (req, res) => {
    try {
        await Author.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            });
        console.log(res.Stringify(JSON))
        res.json({success: true})
    } catch (error) {
        res.json(error);
    }
}

module.exports = {createNewAuthor, findAuthor, findAllAuthors, updateAuthor, deleteAuthor};