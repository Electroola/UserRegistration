describe('TryMima Home Page Tests', () => {
    beforeEach(() => {
        cy.visit('https://trymima.com')
    });

    it('should load the home page successfully', () => {
        cy.url().should('eq', 'https://trymima.com/home');
        cy.get('div[class="sc-iGgWBj iAHySq"]').should('contain', 'Your Business funds 100%')
        cy.get('div[class="sc-iGgWBj iAHySq"]').should('contain', 'Safe and Secured')
        cy.title().should('eq', 'Mima - Freemium Business Management Solution Tools')
    });

    it('should have all navigation links', () => {
        // Assuming the navigation links are <a> tags within the <nav> element
        cy.get('nav a').should(($links) => {
            // Check the number of links
            expect($links).to.have.length.at.least(1);

            // Check each link for specific texts (Stories, Pricing, Blog, Contact us.)
            const texts = ['Products', 'Stories', 'Pricing', 'Blog', 'Contact us'];
            $links.each((index, link) => {
                expect(texts).to.include(link.innerText);
            });
        });
    })

    // .contains('Products')
    it('should navigate to the Products page', () => {
        cy.get('[href="/home#features"]').contains('Products').click({ force: true });
        cy.url().should('include', '/home#features');
        cy.get(':nth-child(1) > .fHsvhC > .sc-iGgWBj').should('contain', 'Global Storefront');

    });

    it('should have a functional contact form', () => {
        cy.get('.mt-20 > .flex > .sc-dcJsrY > .sc-fqkvVR').contains('Sign up and get 1 month free').click({ force: true });
        cy.url().should('include', '/signup');
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes("Cannot read properties of undefined (reading 'toLowerCase')")) {
                // We expected this error, so let's ignore it
                return false;
            }
            // Let other errors fail the test
            return true;
        });
        cy.get("#fullname").type('Alao Olayiwola')
        cy.get('#businessname').type('Electron')
        cy.get('#businessemail').type('falowotimothy17@gmail.com')
        cy.get('#businessphonenumber').type('0123456789')
        cy.get('#businessRegNum').type('123')
        cy.get('.sc-imWYAI').click()
        cy.get('#website').type('electron.com')
        cy.get('#instagramHandle').type('@olayiwola')
        cy.get('#twitterHandle').type('@olayiwola')
        cy.get('.sc-cPiKLX').click()
        cy.get('#scrollableDiv > :nth-child(2)').click()
        cy.get('#password').type("@Eelectron9988")
        cy.get('.sc-imWYAI').click()
    })

})
