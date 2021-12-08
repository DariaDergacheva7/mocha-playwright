const menuField = '#app > section > section.sc-dIsAE.kBFKBR.admin-bro_Box > section.sc-dIsAE.top-bar__NavBar-sc-1qk1nql-0.idZUqT.fFVfZg.admin-bro_NavBar > section.sc-dIsAE.cAqQfW.admin-bro_Box > span > svg';
const mongooseResourcesField = '#app > section > section.sc-dIsAE.sidebar__StyledSidebar-z5zut0-0.fUXwGs.eGrpwx.visible > section.sc-dIsAE.dhUhGA.admin-bro_Resources > section > ul > li:nth-child(1) > a > div';
const buttonCommentPassField = '#app > section > section.sc-dIsAE.sidebar__StyledSidebar-z5zut0-0.fUXwGs.eGrpwx.visible > section.sc-dIsAE.dhUhGA.admin-bro_Resources > section > ul > li:nth-child(1) > ul > li:nth-child(1) > a > div';
const profileNameField = '#app > section > section.sc-dIsAE.kBFKBR.admin-bro_Box > section.sc-dIsAE.top-bar__NavBar-sc-1qk1nql-0.idZUqT.fFVfZg.admin-bro_NavBar > section.sc-dIsAE.hUwyHp.admin-bro_Box > section > div > section.sc-dIsAE.dHfQEO.admin-bro_Box > section > div.sc-iJCRLp.dpQocQ';

const BoardPage = {
    getComment: async(page) => {
         await page.click(menuField);
		 await page.click(mongooseResourcesField);
		 await page.click(buttonCommentPassField);
    },
	getProfileName: async(page) => {
        const profileNameText = await page.textContent(profileNameField);
        return profileNameText
    }
}

export default BoardPage;


