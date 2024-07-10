import React, {useEffect, useState} from 'react';
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
import {AuthNavigationProp} from '@navigators/types';
import auth from '@react-native-firebase/auth';
import style from './style';
import {CoffeeAnimation} from '@components';
import {COLORS} from '@theme';
export const Register = () => {
  const navigation = useNavigation<AuthNavigationProp>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isShowing, setShowing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const SignUp = async () => {
    if (!email) {
      Alert.alert('Error', 'Email required *');
      return;
    } else if (!password && password.trim() && password.length > 6) {
      Alert.alert('Error', 'Weak password, minimum 6 chars');
      return;
    } else {
      try {
        setLoading(true);
        let response = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        if (response) {
          Alert.alert(
            'Success',
            'Your Account has been Created Successfully. You are directed to the Login Page.',
            [
              {
                text: 'ok',
                onPress: () => navigation.goBack(),
              },
            ],
          );
        }
        setLoading(false);
      } catch (e: any) {
        Alert.alert('Error', JSON.stringify(e?.message));
        setLoading(false);
      }
      return;
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
              placeholder="Email"
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
              onPress={SignUp}
              disabled={loading}>
              {loading ? (
                <ActivityIndicator
                  size="large"
                  color={COLORS.primaryWhiteHex}
                />
              ) : (
                <Text style={style.buttonText}>Register</Text>
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={style.navButton}
            onPress={() => navigation.goBack()}
            disabled={loading}>
            <Text style={style.navButtonText}>Have Account? Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
