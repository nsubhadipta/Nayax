const { db } = require('../util/admin');


exports.getAllHeros = (request, response) => {
	db
		.collection('heros')
		.orderBy('createdAt', 'desc')
		.get()
		.then((data) => {
			let heros = [];
			data.forEach((doc) => {
				heros.push({
                    heroId: doc.id,
                    title: doc.data().title,
					description: doc.data().desc,
					createdAt: doc.data().createdAt,
				});
			});
			return response.json(heros);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};


// exports.postOneTodo = (request, response) => {
// 	if (request.body.body.trim() === '') {
// 		return response.status(400).json({ body: 'Must not be empty' });
//     }
    
//     if(request.body.title.trim() === '') {
//         return response.status(400).json({ title: 'Must not be empty' });
//     }
    
//     const newTodoItem = {
//         title: request.body.title,
//         body: request.body.body,
//         createdAt: new Date().toISOString()
//     }
//     db
//         .collection('todos')
//         .add(newTodoItem)
//         .then((doc)=>{
//             const responseTodoItem = newTodoItem;
//             responseTodoItem.id = doc.id;
//             return response.json(responseTodoItem);
//         })
//         .catch((err) => {
// 			response.status(500).json({ error: 'Something went wrong' });
// 			console.error(err);
// 		});
// };