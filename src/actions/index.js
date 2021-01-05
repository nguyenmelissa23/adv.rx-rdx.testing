import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS }  from 'actions/types';

export function saveComment(comment) {
	return{
		type: SAVE_COMMENT, 
		payload: comment
	}
}

export async function fetchComments()  {
	const response = await axios.get('http://jsonplaceholder.typicode.com/comments');
	const comments = response.data.map((comment) => comment.name);
	console.log(comments);
	return {
		type: FETCH_COMMENTS, 
		payload: comments
	}
}