import * as SecureStore from "expo-secure-store"

export async function logIn(email, password, setUser) {
	try {
		// validate with authenticator

		// temporary stand in for if authenticator failed
		if (false) {
			return false
		}

		// filler data that would be recieved from authenticator
		name = "Demo User"
		role = "student"
		profilePic = null
		classes = []

		const userDetails = {
			name: name,
			email: email,
			role: role,
			profilePic: profilePic,
			classes: classes,
		}
		await SecureStore.setItemAsync("user", JSON.stringify(userDetails))
		setUser(userDetails)
	} catch (e) {
		console.warn(e)
		return false
	}
}

export async function signUp(name, email, password, setUser) {
	try {
		// verify with authenticator

		// temporary standin for if authenticator failed
		if (false) {
			return false
		}

		const userDetails = {
			name: name,
			email: email,
			role: "student",
			profilePic: null,
			classes: [],
		}
		await SecureStore.setItemAsync("user", JSON.stringify(userDetails))
		setUser(userDetails)
	} catch (e) {
		console.warn(e)
	}
}

export async function logOut(setUser) {
	try {
		await SecureStore.deleteItemAsync("user")
		setUser(null)
		return true
	} catch (e) {
		console.warn(e)
		return false
	}
}

export async function updateUserDetails(name, email, password, user, setUser) {
	try {
		// validate with authenticator (i.e. if email unused)

		// updates password if given new password
		if (password) {
			// validate with auth
		}

		const newUserDetails = {
			...user,
			name: name,
			email: email,
		}

		await SecureStore.setItemAsync("user", JSON.stringify(newUserDetails))
		setUser(newUserDetails)
	} catch (e) {}
}

export async function updateProfilePhoto(uri, user, setUser) {
	try {
		const newUserDetails = { ...user, profilePic: uri }
		await SecureStore.setItemAsync("user", JSON.stringify(newUserDetails))
		setUser(newUserDetails)
	} catch (e) {
		console.warn(e)
	}
}
