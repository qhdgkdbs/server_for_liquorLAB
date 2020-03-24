// api의 로직
var fs = require('fs');

const models = require('../../models');

const index = (req, res) => {
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit, 10);
    if(Number.isNaN(limit)){
        return res.status(400).end();
    }

    models.Liquor
        .findAll({
            limit
        })
        .then(liquors => {
            res.json(liquors)
        })

    // res.json(liquors.slice(0, limit))
}

const show = (req,res) => {
    const title = (req.params.title);
    if(!title) return res.status(400).end();
    
    // const user = users.filter((user) => user.id === id)[0];

    models.Liquor.findOne({
        where : {
            title
        }
    }).then(liquor => {
        if(!liquor) return res.status(404).end();
        res.json(liquor)
    })  
}

const destory = (req, res) => {
    const title = parseInt(req.params.id, 10);
    if(!title) return res.status(400).end();
    
    // users = users.filter(user => user.id !== id);
    models.Liquor.destroy({
        where : { 
            title
        }
    }).then(() => {
        res.status(204).end();
    })
}

const create  = (req, res) => {
    const title = req.body.title;
    const des = req.body.des;
    const info = req.body.info;
    const item = req.body.item;

    if(!title) return res.status(400).end();

    // const isConflic = users.filter(user => user.name === name).length
    // if(isConflic) return res.status(409).end();

    models.Liquor.create({title, des, info, item})
        .then(liquor => {
            res.status(201).json(liquor)
        })
        .catch(err => {
            if(err.name === 'SequelizeUniqueConstraintError' ){
                return res.status(409).end() 
            }
            res.status(500).end();
        })
    // const id = Date.now()  >>> 데이터 베이스에서 자동으로 id생성
    
}

const update = (req, res) => {
    // const id = parseInt(req.params.id, 10)
    const pTitle = req.params.pTitle;
    // if(Number.isNaN(id)) return res.status(400).end();
    if(!pTitle) return res.status(400).end();

    const title = req.body.title;
    const des = req.body.des;
    const info = req.body.info;
    const item = req.body.item;

    if(!(title || des || info || item )) return res.status(400).end();

    // const user = users.filter(user => user.id === id )[0]

    // if(users.filter(user => user.name === name).length) return res.status(409).end();
    // if(!user) return res.status(404).end();
    // user.name = name;

    models.Liquor.findOne({where : {title : pTitle}})
        .then(liquor => {
            if(!liquor) return res.status(404).end();
            
            if(title) liquor.title = title;
            if(des) liquor.des = des;
            if(info) liquor.info = info;

            liquor.save()
                .then(_ => {
                    res.json(liquor);
                })
                .catch(err => {
                    if(err.name === "SequelizeUniqueConstraintError"){
                        return res.status(409).end();
                    }
                    return res.status(500).end();
                })
        })

    
}

module.exports={
    index,
    show,
    destory,
    create,
    update,
}