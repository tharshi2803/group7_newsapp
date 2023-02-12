import React, { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [seePassword, setSeePassword] = useState(true);
    const [checkValidEmail, setCheckValidEmail] = useState(false);
    const [name, setName] = useState(false);

    const handleCheckEmail = (text) => {
        let re = /\S+@\S+\.\S+/;
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        setName(textvalue);
        setEmail(text);
        if (re.test(text) || regex.test(text)) {
            setCheckValidEmail(false);
        } else {
            setCheckValidEmail(true);
        }
    };

    const checkPasswordValidity = (value) => {
        const isNonWhiteSpace = /^\S*$/;
        if (!isNonWhiteSpace.test(value)) {
            return "Password must not contain Whitespaces.";
        }
        return null;
    };

    const handleSubmit = () => {
        const checkPassowrd = checkPasswordValidity(password);
        if (!checkPassowrd) {
            navigation.navigate("login")

        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.wrapperInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={(textvalue) => setName(textvalue)}
                />

            </View>

            <View style={styles.wrapperInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => handleCheckEmail(text)}
                />
            </View>
            {checkValidEmail ? (
                <Text style={styles.textFailed}>Wrong format email</Text>
            ) : (
                <Text style={styles.textFailed}> </Text>
            )}
            <View style={styles.wrapperInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    secureTextEntry={seePassword}
                    onChangeText={(text) => setPassword(text)}
                />

            </View>



            {email == "" || password == "" || checkValidEmail == true ? (
                <TouchableOpacity
                    disabled
                    style={styles.buttonDisable}
                    onPress={handleSubmit}
                >
                    <Text style={styles.text}>Signup</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.text}>Signup</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 20,
    },
    wrapperInput: {
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: "grey",
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        padding: 10,
        width: "100%",
    },
    wrapperIcon: {
        position: "absolute",
        right: 0,
        padding: 10,
    },
    icon: {
        width: 30,
        height: 24,
    },
    button: {
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3b7197",
        borderRadius: 5,
        marginTop: 25,
    },
    buttonDisable: {
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "grey",
        borderRadius: 5,
        marginTop: 25,
    },
    text: {
        color: "white",
        fontWeight: "700",
    },
    textFailed: {
        alignSelf: "flex-end",
        color: "red",
    },
});