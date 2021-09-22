export const LoginForm = () => {

	return `
    </br>
		<div class="newEntry">
		<h3>Login</h3>
			<div>
				<input value=""
					name="name"
					class="newEntry__input"
					type="text"
					placeholder="User Name" />
			</div>
			<div>
				<input value=""
					name="email"
					class="newEntry__input"
					type="text"
					placeholder="name@place.com" />
			</div>

			<button id="login__submit">Login</button>
			<button id="login__cancel">Cancel</button>
		</div>
	`
}