https://github.com/chaijs/chai	
	
//Chainer	Example
not	.should('not.equal', 'Jane')
	expect(name).to.not.equal('Jane')
deep	.should('deep.equal', { name: 'Jane' })
	expect(obj).to.deep.equal({ name: 'Jane' })
nested	.should('have.nested.property', 'a.b[1]')
	.should('nested.include', {'a.b[1]': 'y'})
	expect({a: {b: 'x'}}).to.have.nested.property('a.b')
	expect({a: {b: 'x'}}).to.nested.include({'a.b': 'x'})
ordered	.should('have.ordered.members', [1, 2])
	expect([1, 2]).to.have.ordered.members([1, 2])
	expect([1, 2]).not.to.have.ordered.members([2, 1])
any	.should('have.any.keys', 'age')
	expect(arr).to.have.any.keys('age')
all	.should('have.all.keys', 'name', 'age')
	expect(arr).to.have.all.keys('name', 'age')
a(type)	.should('be.a', 'string')
Aliases:// an	expect('test').to.be.a('string')
include(value)	.should('include', 2)
Aliases: contain, includes, contains	/expect([1,2,3]).to.include(2)
ok	.should('not.be.ok')
	expect(undefined).to.not.be.ok
TRUE	.should('be.true')
	expect(true).to.be.true
FALSE	.should('b')
