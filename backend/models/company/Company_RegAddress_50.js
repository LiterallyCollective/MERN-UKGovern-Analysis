
module.exports = (sequelize, Sequelize) => {
    let CompanyRegAddress50Model = sequelize.define("tbl_company_regaddress_50", {
        CompanyNumber: {
            type: Sequelize.STRING
        },
        RegAddress_CareOf: {
            type: Sequelize.STRING
        },
        RegAddress_POBox: {
            type: Sequelize.STRING
        },
        RegAddress_AddressLine1: {
            type: Sequelize.STRING
        },
        RegAddress_AddressLine2: {
            type: Sequelize.STRING
        },
        RegAddress_PostTown: {
            type: Sequelize.STRING
        },
        RegAddress_County: {
            type: Sequelize.STRING
        },
        RegAddress_Country: {
            type: Sequelize.STRING
        },
        RegAddress_PostCode: {
            type: Sequelize.STRING
        },
    });

    return CompanyRegAddress50Model;
};