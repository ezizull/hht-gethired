import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // screen
    screen: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 25,
    },

    // logo
    logo_section: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    logo_image: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        marginRight: 10,
    },
    logo_title: {
        fontSize: 30,
        fontWeight: "800"
    },

    // header
    header_section: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "center",
    },
    header_text: {
        width: 350,
        alignContent: "center",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "700"
    },

    // forms
    forms_section: {
        marginTop: 30,
    },
    forms_field: {
        marginTop: 35,
    },
    forms_field_title: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
        color: '#313236',
    },
    forms_field_input: {
        borderWidth: 0.5,
        borderColor: '#79797a',
        borderBottomWidth: 0,
        backgroundColor: "transparent",
    },
    forms_button_field: {
        marginTop: 60,
    },
    forms_button: {
        height: 55,
        borderRadius: 5,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#f42619',
    },
    forms_button_text: {
        fontSize: 16,
        fontWeight: "600",
        color: 'white',
    },

    // registered
    registered_section: {
        marginVertical: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    registered_text: {
        fontSize: 16,
        color: '#313236',
        marginRight: 5,
    },
    registered_button_section: {

    },
    registered_button: {
        fontSize: 16,
        fontWeight: "700",
        color: '#f42619',
    },
});
