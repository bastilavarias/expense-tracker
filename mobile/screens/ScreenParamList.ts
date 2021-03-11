import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type ScreenParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  AddTransaction: undefined;
  Income: undefined;
  Expenses: undefined;
  Settings: undefined;
  Profile: undefined;
};

export type ScreenProps<T extends keyof ScreenParamList> = {
  navigation: StackNavigationProp<ScreenParamList, T>;
  route: RouteProp<ScreenParamList, T>;
};
