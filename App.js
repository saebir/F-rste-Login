//Impotere de nødvendige ting fra React og React Native
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

//Her er Login skærmen.
export default function Example() {
  //Her bruger man useState til at gemme email og kodeord.
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  return (
    //SafeAreaView sørger for at det der skal stå på skærmen ikke ligger mærkeligt.
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>

        {/* Her er Logoet og overskriften */}
        <View style={styles.header}>
          <Image
            alt="App Logo"
            resizeMode="contain"
            style={styles.headerImg}
            source={{ uri: 'https://assets.withfra.me/Shttps://th.bing.com/th/id/OIP.l0aYqmbrlQ5JE7vNeqHZGwHaEN?rs=1&pid=ImgDetMainignIn.2.png' }} />

            {/* Overskrift */}
          <Text style={styles.title}>
            Sign in to <Text style={{ color: '#075eec' }}>MyApp</Text>
          </Text>

          {/* Undertekst */}
          <Text style={styles.subtitle}>
            Get access to your portfolio and more
          </Text>
        </View>

          {/* Her er Login feltet hvor man indfylder */}
        <View style={styles.form}>

          {/* Email */}
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email} />
          </View>

            {/* Kodeord */}
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>

            <TextInput
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={password => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password} />
          </View>

            {/* Login knap */}
          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress - Her kan man tilføje funktionalitet senere.
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>

              {/* Glemt adgangskode */}
          <TouchableOpacity
            onPress={() => {
              // handle link - her kan man også tilføje funktionalitet senere 
            }}>
            <Text style={styles.formLink}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>

            {/* Hvis man ikke har en konto */}
      <TouchableOpacity
        onPress={() => {
          // handle link - her tilføjer man også funktionalitet senere
        }}>
        <Text style={styles.formFooter}>
          Don't have an account?{' '}
          <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

//Styling af layout i noget der ligner CSS. 
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    padding: 24,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  /** Form */
  form: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#075eec',
    textAlign: 'center',
  },
  formFooter: {
    paddingVertical: 24,
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});