class login{
    txtusername="input[placeholder=Username]"
    txtpassword="input[placeholder=Password]"
    txtbtn='button[type="submit"]'
    msg=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
    setusername(username)
    {
        cy.get(this.txtusername).type(username)
    }
    userpassword(password)
    {
        cy.get(this.txtpassword).type(password)
    }
    clickbutton()
    {
        cy.get(this.txtbtn).click()
    }
    verifylogin()
    {
        cy.get(this.msg).should("have.text", "Dashboard")
    }
}
export default login