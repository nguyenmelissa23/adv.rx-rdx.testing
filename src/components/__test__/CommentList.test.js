import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
// NOTE: Problem: need to access the state from redux.
// FIX: by adding preloaded state in the Root > createStore.
	const initialState = {
		comments: ['Comment 1', 'Comment 2']
	};

	wrapped = mount(
		<Root initialState = {initialState} >
			<CommentList/>
		</Root>
	)
})

it('creates one li per comment', () => {
	expect(wrapped.find('li').length).toEqual(2);
})

it('shows the text for each comment', () => {
	expect(wrapped.render().text()).toContain('Comment 1');
	expect(wrapped.render().text()).toContain('Comment 2');
})