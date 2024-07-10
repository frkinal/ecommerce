import React, {useState} from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthNavigationProp} from '@navigators/types';
import style from './style';
import {CoffeeAnimation} from '@components';
import {COLORS} from '@theme';
import {useStore} from 'src/store/store';
export const Login = () => {
  const navigation = useNavigation<AuthNavigationProp>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isShowing, setShowing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const saveLogin = useStore((state: any) => state.saveLogin);
  const SignIn = async () => {
    try {
      setLoading(true);
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response) {
        console.log(response);
        Alert.alert('Successful Login', JSON.stringify(response));
        saveLogin();
        setLoading(false);
      }
    } catch (e: any) {
      setLoading(false);
      Alert.alert('Error', e.message);
    }
  };
  return (
    <ScrollView style={style.container}>
      <KeyboardAvoidingView keyboardVerticalOffset={10} behavior={'position'}>
        <View style={style.innerContainer}>
          <CoffeeAnimation title={'Welcome Our Coffee Shop'} />
          <View style={style.formContainer}>
            <TextInput
              style={style.textInputStyle}
              placeholder="E-Mail"
              keyboardType="email-address"
              placeholderTextColor="#bdbdbd"
              onChangeText={setEmail}
            />
            <View style={style.textInputStyle}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#bdbdbd"
                secureTextEntry={isShowing ? false : true}
                onChangeText={setPassword}
              />
              <Icon
                onPress={() =>
                  isShowing ? setShowing(false) : setShowing(true)
                }
                style={style.textInputIcon}
                size={20}
                name={isShowing ? 'eye-off' : 'eye'}
              />
            </View>
            <TouchableOpacity
              style={style.button}
              disabled={loading}
              onPress={SignIn}>
              {loading ? (
                <ActivityIndicator
                  size="large"
                  color={COLORS.primaryWhiteHex}
                />
              ) : (
                <Text style={style.buttonText}>Login</Text>
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={style.navButton}
            onPress={() => navigation.navigate('Register')}
            disabled={loading}>
            <Text style={style.navButtonText}>New user? Join here</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
