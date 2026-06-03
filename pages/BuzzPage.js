const BasePage = require('./BasePage');
const { expect } = require('@playwright/test');

class BuzzPage extends BasePage {

    constructor(page) {

        super(page);

        // Left Menu
        this.buzzMenu = page.locator('//span[text()="Buzz"]');

        // Top Bar Header
        this.buzzHeader = page.locator(
            '.oxd-topbar-header-breadcrumb h6'
        );

        // Post Input
        this.postInput = page.locator(
            'textarea.oxd-buzz-post-input'
        );

        // Post Button (Share)
        this.shareButton = page.getByRole('button', {
            name: 'Post'
        });

        // Posts Feed
        this.postCards = page.locator(
            '.orangehrm-buzz-post'
        );

        this.latestPost = page.locator(
            '.orangehrm-buzz-post'
        ).first();

        // Like Button
        this.likeButton = page.locator(
            '.orangehrm-buzz-stats-row button'
        ).first();

        // Comment Input
        this.commentInput = page.locator(
            'input.oxd-buzz-comment-input'
        );

        // Photo Button
        this.photoButton = page.locator(
            '.orangehrm-buzz-post-header-icon'
        ).first();

        this.videoButton = page.locator(
            '.orangehrm-buzz-post-header-icon'
        ).nth(1);

        // Toast
        this.successToast = page.locator(
            '.oxd-toast-content'
        );

        // Most Liked / Most Commented tabs
        this.mostRecentTab = page.getByText('Most Recent Posts');

        this.mostLikedTab = page.getByText('Most Liked Posts');

        this.mostCommentedTab = page.getByText('Most Commented Posts');

    }

    async clickBuzzMenu() {

        await expect(this.buzzMenu).toBeVisible({
            timeout: 30000
        });

        await this.buzzMenu.click();

        await this.buzzHeader.waitFor({
            state: 'visible',
            timeout: 30000
        });

    }

    async createPost(message) {

        await expect(this.postInput).toBeVisible({
            timeout: 30000
        });

        await this.postInput.click();

        // The post modal opens on click
        const postModal = this.page.locator(
            '.orangehrm-buzz-create-post'
        );

        const modalTextarea = postModal.locator('textarea').first();

        await expect(modalTextarea).toBeVisible({
            timeout: 10000
        });

        await modalTextarea.fill(message);

        await this.shareButton.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async likeLatestPost() {

        await expect(this.latestPost).toBeVisible({
            timeout: 30000
        });

        const likeBtn = this.latestPost.locator(
            '.orangehrm-buzz-stats-row button'
        ).first();

        await likeBtn.click();

    }

    async getLatestPostText() {

        await expect(this.latestPost).toBeVisible({
            timeout: 30000
        });

        return await this.latestPost.locator(
            '.orangehrm-buzz-post-body-text'
        ).textContent();

    }

    async clickMostLiked() {

        await expect(this.mostLikedTab).toBeVisible({
            timeout: 30000
        });

        await this.mostLikedTab.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async clickMostCommented() {

        await expect(this.mostCommentedTab).toBeVisible({
            timeout: 30000
        });

        await this.mostCommentedTab.click();

        await this.page.waitForLoadState('domcontentloaded');

    }

    async verifyPostsVisible() {

        await expect(this.postCards.first()).toBeVisible({
            timeout: 30000
        });

    }

}

module.exports = BuzzPage;
