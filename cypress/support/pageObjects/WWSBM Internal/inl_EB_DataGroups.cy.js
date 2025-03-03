class inl_DataGroups {
    datagroups(EB, Data_Groups) {
        cy.contains(EB).click(); //sidebar
        cy.contains(Data_Groups).click(); //sidebar dropdown (Data Groups)
    }

    searchbar(DataGroup_ID) {
        // Top Searchbar
        cy.get('.ant-input-affix-wrapper').type(DataGroup_ID);
        cy.get('.ant-input-affix-wrapper').clear();
    }

    ChartAssign(upload_button, facility, VFfile_name, VF_assign, split, VF_user, Re_assign, VF_reassign) {

        //file upload
        cy.contains(upload_button).click(); //upload button
        cy.get('#project').click()  //select category
        cy.contains('.ant-select-item-option-content', facility).click(); //facility select

        const fileName = VFfile_name // file in fixtures
        cy.get('input[type="file"]').attachFile(fileName); //attaching the file
        cy.contains('Save').click() //file will upload
        cy.wait(10000);

          // Select the first action button
          cy.get('button.ant-btn.css-zg0ahe.ant-btn-text.ant-dropdown-trigger').eq(0).click(); //action button
          cy.contains(VF_assign).click(); //Assigning to Data Intergrity Speciliast
          cy.contains(split).click(); //Assigning by split method
          cy.get('.ant-select-selection-overflow').click(); //pop up to select members
          cy.contains(VF_user).click(); //Selecting user
          cy.get('.ant-select-selection-overflow').click(); //closing the dropdown
          cy.get('.w-full > .bg-blue-500').click() //confirming the Assinging 
          cy.wait(3000);

        cy.get('button.ant-btn.css-zg0ahe.ant-btn-text.ant-dropdown-trigger').eq(0).click(); //action button
        cy.contains(Re_assign).click();
        cy.contains(VF_reassign).click();
        cy.get('.ant-radio-inner').click({force: true});
        cy.get('.ant-checkbox-inner').eq(1).click({force: true});
        cy.get('.ant-btn-primary').eq(1).click({force: true});

    }

    DGactions(Download, Delete) {
        cy.get('button.ant-btn.css-zg0ahe.ant-btn-text.ant-dropdown-trigger').eq(0).click(); //action button
        cy.contains(Download).click();

        cy.get('button.ant-btn.css-zg0ahe.ant-btn-text.ant-dropdown-trigger').eq(0).click(); //action button
        cy.contains(Download).click();

        cy.get('button.ant-btn.css-zg0ahe.ant-btn-text.ant-dropdown-trigger').eq(0).click(); //action button
        cy.contains(Delete).click();
    }

    DGfilters() {

        // Data Group ID Filter
        cy.get('.ant-dropdown-trigger').eq(2).click(); //Filter
        cy.get('.ant-checkbox-inner').eq(1).click({ force: true });
        cy.get('button.ant-btn-primary.ant-btn-sm').should('be.visible').click();

        cy.get('.ant-dropdown-trigger').eq(2).click(); //reset filter
        cy.get('.ant-btn.css-zg0ahe.ant-btn-link.ant-btn-sm').should('be.visible').click();
        cy.get('button.ant-btn-primary.ant-btn-sm').eq(0).should('be.visible').click();

        // Pending calls filter
        cy.get('.ant-dropdown-trigger').eq(3).click(); //Filter
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').should('be.visible');
        cy.get('.ant-dropdown:not(.ant-dropdown-hidden)').find('.ant-checkbox-inner').eq(0)
            .should('be.visible').click({ force: true });
        cy.get('button.ant-btn-primary.ant-btn-sm').eq(1).should('be.visible').click({ force: true });

        cy.get('.ant-dropdown-trigger').eq(3).click(); //Filter
        cy.get('.ant-btn.css-zg0ahe.ant-btn-link.ant-btn-sm').eq(1).should('be.visible').click({ force: true });
        cy.get('button.ant-btn-primary.ant-btn-sm').eq(1).should('be.visible').click();

    }

    chart(releatedDoc) {
        //chart
        cy.get('button.ant-btn.css-zg0ahe.ant-btn-button.hover\\:text-blue-bm').eq(1)
            .should('be.visible').click(); // Click the button
        cy.get('.ant-table-row > :nth-child(2) > .ant-btn > span').eq(0).click();//Patient Details
        cy.get('#rc-tabs-1-tab-2').click(); //Insurance Information
        cy.get('#rc-tabs-1-tab-3').click(); //Order Summary
        cy.get('#rc-tabs-1-tab-4').click(); //LMN Validation
        cy.get('#rc-tabs-1-tab-5').click(); //Coverage Summary

        cy.contains('Related Documents').click(); //Related Documents
        cy.get('#category').click();
        cy.get('.ant-select-item-option-content').eq(0).click();
        cy.get('.dropzone').click();

        const fileName = releatedDoc// file in fixtures
        cy.get('input[type="file"]').attachFile(fileName); //attaching the file
        cy.get('[data-testid="DocumentDocViewUpload-component"] > .ant-btn').click({force: true});
        cy.wait(3000);

        cy.get('#rc-tabs-2-tab-2').click();
        cy.get(".ant-collapse-header-text").eq(0).click();
        cy.get("table").should("be.visible"); // Ensure table is loaded
        cy.contains("td", releatedDoc).parent().find("td:last-child button")
            .first().click();
        cy.wait(3000);
        cy.get('span[aria-label="close"] svg').eq(7).click();

        cy.contains("td", releatedDoc) // Download
            .parent().find("td:last-child button").eq(1).click();

        cy.contains("td", releatedDoc) // Delete
            .parent().find("td:last-child button") .eq(2).click();

        cy.get('.ant-btn-primary.bg-blue-500').eq(1).click();
        
        cy.get('.flex > .anticon-close > svg').eq(1).click();
    }

    CHfilters(OK) {

        // patinet name
        cy.get('.anticon-filter').eq(3).click();
        cy.get('.ant-checkbox-inner').eq(2).click({ force: true });
        cy.contains(OK).click({ force: true });

        cy.get('.anticon-filter').eq(3).click();
        cy.get('.ant-checkbox-inner').eq(2).click({ force: true });
        cy.contains(OK).click({ force: true });

        // Chart Status
        cy.get('.anticon-filter').eq(4).click();
        cy.get('.ant-checkbox-inner').eq(2).click({ force: true });
        cy.contains(OK).click({ force: true });

        cy.get('.anticon-filter').eq(4).click();
        cy.get('.ant-checkbox-inner').eq(2).click({ force: true });
        cy.contains(OK).click({ force: true });

        // Calling Status
        cy.get('.anticon-filter').eq(5).click();
        cy.get('.ant-checkbox-inner').eq(2).click({ force: true });
        cy.contains(OK).click({ force: true });

        cy.get('.anticon-filter').eq(5).click();
        cy.get('.ant-checkbox-inner').eq(2).click({ force: true });
        cy.contains(OK).click({ force: true });

    }


    docUpload(Doc_upload, releatedDoc, Delete) {
        //  Doc upload
        cy.contains(Doc_upload).click(); //upload button
        cy.get('#category').click({force: true});
        cy.get('.ant-select-item-option-content').eq(0).click({force: true});
        cy.get('.dropzone').eq(1).click({force: true});

        const fileName = releatedDoc// file in fixtures
        cy.get('input[type="file"]').attachFile(fileName); //attaching the file
        cy.get('.flex > .bg-blue-500').click();
        cy.wait(3000);

        cy.get('#rc-tabs-2-tab-2').click({force: true});
        cy.get(".ant-collapse-header-text").eq(0).click({force: true});
        cy.get("table").should("be.visible"); // Ensure table is loaded
        cy.contains("td", releatedDoc).parent().find("td:last-child button")
            .first().click({force: true});
        cy.wait(3000);
        cy.get('span[aria-label="close"] svg').eq(7).click({force: true});

        cy.contains("td", releatedDoc) // Download
            .parent().find("td:last-child button").eq(1).click({force: true});

        cy.contains("td", releatedDoc) // Delete
            .parent().find("td:last-child button") .eq(2).click({force: true});

        cy.get('.ant-btn-primary.bg-blue-500').eq(2).click({force: true});

        cy.contains(Delete).click({force: true});
        cy.get('.ant-modal-footer > .ant-btn-primary').click({force: true});

    }

    chartDownload(Download_Chart, fileName) {
        // Chart Download

        //Download Entire Chart
        cy.get('.ant-table-selection-column > .ant-checkbox-wrapper').click({ force: true });

        //ExceL
        cy.contains(Download_Chart).click( {force: true});
        cy.get('#exportAs').click({ force: true });
        cy.get('.ant-select-item-option-content').eq(0).click();
        cy.get('#fileName').type(fileName);
        cy.get('#password').type(fileName);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
        cy.wait(3000);

        //PDF
        cy.contains(Download_Chart).click();
        cy.get('.ant-radio-input').eq(1).click({ force: true });
        cy.get('#exportAs').click({ force: true });
        cy.get('.ant-select-item-option-content').eq(0).click();
        cy.get('#fileName').type(fileName);
        // cy.get('#password').type(this.mywwsbm_external.fileName);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
        cy.wait(3000);

        // Download Chart Selection
        // Excel
        cy.contains(Download_Chart).click({ force: true });
        cy.get('#exportAs').click({ force: true });
        cy.get('.ant-select-item-option-content').eq(1).click();
        cy.get('.ant-select-selection-overflow').click();
        cy.get('.ant-select-item-option-content').eq(2).click();
        cy.get('.ant-select-item-option-content').eq(3).click();
        cy.get('.ant-select-selection-overflow').click();
        cy.get('#fileName').type(fileName);
        cy.get('#password').type(fileName);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
        cy.wait(3000);

        // PDF
        cy.contains(Download_Chart).click();
        cy.get('.ant-radio-input').eq(1).click({ force: true });
        cy.get('#exportAs').click();
        cy.get('.ant-select-item-option-content').eq(1).click();
        cy.get('.ant-select-selection-overflow').click();
        cy.get('.ant-select-item-option-content').eq(2).click();
        cy.get('.ant-select-item-option-content').eq(3).click();
        cy.get('.ant-select-selection-overflow').click();
        cy.get('#fileName').type(fileName);
        // cy.get('#password').type(this.mywwsbm_external.fileName);
        cy.get('.ant-modal-footer > .ant-btn-primary').click();
        cy.wait(3000);
    }


}
export default inl_DataGroups;