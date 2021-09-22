export const RegisterForm = () => {

	return `
		<div class="newEntry">
		<h3>Register</h3>
			<div>
				<input value=""
					name="registerName"
					class="newEntry__input"
					type="text"
					placeholder="User Name" />
			</div>
			<div>
				<input value=""
					name="registerEmail"
					class="newEntry__input"
					type="text"
					placeholder="name@place.com" />
			</div>

			<button id="register__submit">Register</button>
			<button id="login__cancel">Cancel</button>
		</div>
	`
}
