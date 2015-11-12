import Ember from 'ember';

export default Ember.Controller.extend({
	fields:[
	{
		name:"username",
		type:"text",
		caption:"Username",
		placeholder:"Enter a username",
		isRequired: true,
		validations:[
		/*{
			message:"too small",
			validate:function(value,formField){
				return value.length>3;
			}
		},*/{
			message:"too big",
			validate:function(value,formField){
				return Em.isEmpty(value)||value.length<10;
			}
		}
		],
		maxLength:14
	},
	{
		name:"password",
		type:"password",
		caption:"Password",
		placeholder:"Enter a password"
	},
	{
		name:"firstName",
		type:"text",
		caption:"First Name",
		placeholder:"Enter your first name"
	},
	{
		name:"lastName",
		type:"text",
		caption:"Last Name",
		placeholder:"Enter your last name"
	},
	{
		name:"password2",
		type:"password",
		caption:"Password",
		placeholder:"Repeat password"
	}
	]
});
