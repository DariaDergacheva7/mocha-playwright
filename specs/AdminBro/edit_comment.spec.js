const assert = require('assert');
import playwright from 'playwright';
import {run, stop} from '../../lib/browser';
import AuthPage from '../../framework/pages/authPage';
import BoardPage from '../../framework/pages/boardPage';
import CommentPage from '../../framework/pages/commentPage';

describe('UI test AdminBro', () => {
			let page;
        beforeEach(async () => {
            page = await run('https://admin-bro-example-app-staging.herokuapp.com/admin/login')
        })

        afterEach(async () => {
            await stop();
        })

        it('Перейти на страницу создания коментариев и создать новый комментарий  и редактировать его', async () => {
				
				await AuthPage.login(page, 'test@example.com', 'password');
				await BoardPage.getComment(page);
				await CommentPage.createNewComment(page, 'test 3 test');
				await CommentPage.editComment(page, 'test 3 test 445');
				const editCommentText = await CommentPage.editCommentText(page);
				assert.deepEqual(editCommentText, 'test 3 test 445');
            }
        )
    }
)