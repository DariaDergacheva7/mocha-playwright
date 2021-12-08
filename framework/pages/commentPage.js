const buttonNewCommentText = '#app > section > section.sc-dIsAE.kBFKBR.admin-bro_Box > section.sc-dIsAE.eINiCE.admin-bro_Box > section.sc-dIsAE.idZUqT.admin-bro_ActionHeader > section.sc-dIsAE.blMqlv.admin-bro_Box > section.sc-dIsAE.hUpUUH.admin-bro_Box > section > a.sc-gtssRu.sc-dvXXZy.drDcIw.ftpoDy.admin-bro_ButtonGroupItem.admin-bro_Button.admin-bro_ButtonGroupItem';
const buttonNewCommentClick = '#app > section > section.sc-dIsAE.kBFKBR.admin-bro_Box > section.sc-dIsAE.eINiCE.admin-bro_Box > section.sc-dIsAE.idZUqT.admin-bro_ActionHeader > section.sc-dIsAE.blMqlv.admin-bro_Box > section.sc-dIsAE.hUpUUH.admin-bro_Box > section > a.sc-gtssRu.sc-dvXXZy.drDcIw.ftpoDy.admin-bro_ButtonGroupItem.admin-bro_Button.admin-bro_ButtonGroupItem';
const contentField = '#content';
const buttonSaveClick = '#app > section > section.sc-dIsAE.kBFKBR.admin-bro_Box > section.sc-dIsAE.wrapper__StyledWrapper-gd2y70-0.eINiCE.iqzcqQ.admin-bro_Box > form > section.sc-hhIhEF.gbqWKS > button';
const commentTextField = '#app > section > section.sc-dIsAE.kBFKBR.admin-bro_Box > section.sc-dIsAE.eINiCE.admin-bro_Box > section.sc-dIsAE.Dfyce.admin-bro_Box > table > tbody > tr:nth-child(1) > td.sc-fFSRdu.eipPgl.admin-bro_TableCell > section';
const editMenuClick = '#app > section > section.sc-dIsAE.kBFKBR.admin-bro_Box > section.sc-dIsAE.eINiCE.admin-bro_Box > section.sc-dIsAE.Dfyce.admin-bro_Box > table > tbody > tr:nth-child(1) > td.sc-fFSRdu.dbiXgM.admin-bro_TableCell > section > div > a > span > svg';
const editContentField = '#content';
const buttonSaveEditClick = '#drawerPortal > form > section.sc-hhIhEF.gbqWKS > button';


const CommentPage = {
    newComment: async(page) => {
        const newCommentText = await page.textContent(buttonNewCommentText);
        return newCommentText;
    },
	createNewComment: async(page, text) => {
        await page.click(buttonNewCommentClick);
        await page.click(contentField);
        await page.fill(contentField, text);
        await page.click(buttonSaveClick);
    },
	сommentText: async(page) => {
        const commentText = await page.textContent(commentTextField);
        return commentText;
    },
	editComment: async(page, textedit) => {
        await page.click(editMenuClick);
        await page.click(editContentField);
        await page.fill(editContentField, textedit);
        await page.click(buttonSaveEditClick);
	},
	editCommentText: async(page) => {
        const editCommentText = await page.textContent(commentTextField);
        return editCommentText;
	}
}

export default CommentPage;
