import {saveComment} from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('save comment', () => {
	let action;
	beforeEach( ()=> {
		action = saveComment('New Comment')
	}); 

	it('has the correct type', () => {
		expect(action.type).toEqual(SAVE_COMMENT);
	});

	it('has the correct payload', () => {
		expect(action.payload).toEqual('New Comment');
	})

})

// describe('fetch comment', () => {

// 	it('has the correct type', () => {

// 	});

// 	it('has the correct payload', () => {
		
// 	})

// })