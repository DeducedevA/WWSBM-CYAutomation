class inl_dashboard {

    Dashboard(dashboard) {
        // Dashboard navigation
        cy.contains(dashboard).click();
    }

    Date_range(Start_Date, End_Date) {
        //Date Range
        // Start Date
        cy.get('.ant-col-md-8 > .ant-picker input').eq(0)
            .clear()
            .type(`${Start_Date}{enter}`)
        // End Date
        cy.get(':nth-child(3) > input').eq(0)
            .clear()
            .type(`${End_Date}{enter}`)
    }

    Filters(State, Product, Status, Insurance, PrescriptionReceivedOn, CallingCompletedOn, DeliveredOn,Subsequent_VF, Internal_FTP) {
        // state
        cy.get('.ant-select-selection-overflow').eq(0).click();
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option')
            .contains(State).should('be.visible').click({ force: true });

        // Product
        cy.get('.ant-select-selection-overflow').eq(1).click();
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option')
            .contains(Product).should('be.visible').click();

        // Status
        cy.get('.ant-select-selection-overflow').eq(2).click();
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option')
            .contains(Status).should('be.visible').click();

        // Insurance
        cy.get('.ant-select-selection-overflow').eq(3).click();
        cy.get('.ant-select-dropdown:not(.ant-select-dropdown-hidden)').find('.ant-select-item-option')
            .contains(Insurance).should('be.visible').click();

        // Prescription Recived On
        cy.get('.ant-picker-input').eq(2).click().type(`${PrescriptionReceivedOn}{enter}`);

        //Calling Completed ON
        cy.get('.ant-picker-input').eq(3).click().type(`${CallingCompletedOn}{enter}`);

        // Delevired On
        cy.get('.ant-picker-input').eq(4).click().type(`${DeliveredOn}{enter}`);

        // Subsequent VF Date
        cy.get('.ant-picker-input').eq(5).click().type(`${Subsequent_VF}{enter}`);

        // Internal_FTP Date
        cy.get('.ant-picker-input').eq(6).click().type(`${Internal_FTP}{enter}`);
    }

    Generate_Report(Generate_Report, fileName) {

        // Excel
        cy.contains(Generate_Report).click();
        cy.get('.ant-dropdown-menu-title-content').eq(0).click();
        cy.get('#fileName').type(fileName);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
        cy.wait(3000);

        // PDF
        cy.contains(Generate_Report).click();
        cy.get('.ant-dropdown-menu-title-content').eq(0).click();
        cy.get('.ant-radio-input').eq(1).click({ force: true });
        cy.get('#fileName').type(fileName );
        cy.get('.ant-modal-footer > .ant-btn-primary').click();

        // // Dashboard Print
        // cy.contains(Generate_Report).click();
        // cy.get('.ant-dropdown-menu-title-content').eq(1).click();
    }

}
export default inl_dashboard;