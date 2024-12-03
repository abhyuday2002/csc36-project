import { useState } from "react"
import IconButton from "../basic/IconButton"
import Input from "../basic/Input"
import { StyleSheet, View } from "react-native"
import FiltersModal from "./FiltersModal"

export default function SearchBar({
	filters,
	defaultData,
	setData,
	searchField,
}) {
	const [input, setInput] = useState("")
	const [filteredData, setFilteredData] = useState(defaultData)
	const [isShowFilters, setShowFilters] = useState(false)
	const [activeFilters, setFilters] = useState(filters)

	const search = (text, data) => {
		setInput(text)
		const query = text.toLowerCase()

		const filteredData = data.filter((item) => {
			if (searchField) {
				return item[searchField].toLowerCase().includes(query)
			} else {
				return item.toLowerCase().includes(query)
			}
		})
		setData(filteredData)
	}

	const applyFilters = (updatedFilters) => {
		setFilters(updatedFilters)
		const data = defaultData.filter((item) => {
			var matchFilter = true
			for (const [filter, options] of Object.entries(updatedFilters)) {
				var matchOptions = false
				for (const [option, isActive] of Object.entries(options)) {
					console.log(updatedFilters)
					console.log(isActive)
					console.log(item)
					matchOptions = matchOptions || !isActive || item[filter] === option
				}
				matchFilter = matchFilter && matchOptions
				if (!matchFilter)
					return false
			}
			return true
		})
		search(input, data)
		setFilteredData(data)
	}

	return (
		<View style={styles.searchBar}>
			<Input
				value={input}
				onChangeText={(text) => search(text, filteredData)}
				inputMode="search"
				icon="magnify"
				slim
				style={{ flex: 1 }}
			/>
			{filters && (
				<IconButton
					onPress={() => setShowFilters(true)}
					name="filter-variant"
				/>
			)}

			<FiltersModal
				filters={activeFilters}
				setFilters={applyFilters}
				visible={isShowFilters}
				setVisible={setShowFilters}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	searchBar: {
		flexDirection: "row",
		padding: 10,
		gap: 10,
	},
})
