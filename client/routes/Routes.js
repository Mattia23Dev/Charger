import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/auth/Splash";
import ForgetPasswordScreen from "../screens/auth/ForgetPasswordScreen";
import UpdatePasswordScreen from "../screens/profile/UpdatePasswordScreen";
import MyAccountScreen from "../screens/profile/MyAccountScreen";
import AddProductScreen from "../screens/admin/AddProductScreen";
import DashboardScreen from "../screens/admin/DashboardScreen";
import ViewProductScreen from "../screens/admin/ViewProductScreen";
import EditProductScreen from "../screens/admin/EditProductScreen";
import ViewCategoryScreen from "../screens/admin/ViewCategoryScreen";
import AddCategoryScreen from "../screens/admin/AddCategoryScreen";
import ViewUsersScreen from "../screens/admin/ViewUsersScreen";
import EditCategoryScreen from "../screens/admin/EditCategoryScreen";
import ViewUserScreen from "../screens/admin/ViewUserScreen";
import ViewTessereScreen from "../screens/admin/ViewTessereScreen.js";
import AddTesseraScreen from "../screens/admin/AddTesseraScreen.js";
import EditTesseraScreen from "../screens/admin/EditTesseraScreen.js";
import Home from "../screens/user/Home.js";
import UserProfileScreen from "../screens/profile/UserProfileScreen.js";
import Privacy from "../screens/user/Privacy.js";
import TermsCondition from "../screens/user/TermsCondition.js";
import Help from "../screens/user/Help.js";
import StationDetailScreen from "../screens/user/StationDetailScreen.js";
import Prices from "../screens/user/Prices.js";
import Profile from "../screens/user/Profile.js";
import Payments from "../screens/user/Payments.js";
import NoleggiGratis from "../screens/user/NoleggiGratis.js";
import AddCard from "../screens/user/AddCard.js";
import OnboardingScreen from "../screens/user/Onboarding.js";
import FAQ from "../screens/user/Faq.js";
import OnboardingStart from "../screens/auth/Onboarding.js";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="forgetpassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="updatepassword" component={UpdatePasswordScreen} />
        <Stack.Screen name="myaccount" component={MyAccountScreen} />
        <Stack.Screen name="dashboard" component={DashboardScreen} />
        <Stack.Screen name="addproduct" component={AddProductScreen} />
        <Stack.Screen name="viewproduct" component={ViewProductScreen} />
        <Stack.Screen name="addtessera" component={AddTesseraScreen} />
        <Stack.Screen name="edittessera" component={EditTesseraScreen} />
        <Stack.Screen name="viewtessere" component={ViewTessereScreen} />
        <Stack.Screen name="viewuser" component={ViewUserScreen} />
        <Stack.Screen name="editproduct" component={EditProductScreen} />
        {/* NEW ROUTE */}
        {/*<Stack.Screen name="profile" component={UserProfileScreen} />*/}
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="privacy" component={Privacy} />
        <Stack.Screen name="terms" component={TermsCondition} />
        <Stack.Screen name="help" component={Help} />
        <Stack.Screen name="prices" component={Prices} />
        <Stack.Screen name="payments" component={Payments} />
        <Stack.Screen name="noleggigratis" component={NoleggiGratis} />
        <Stack.Screen name="addcard" component={AddCard} />
        <Stack.Screen name="faq" component={FAQ} />

        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="onboardingstart" component={OnboardingStart} />

        <Stack.Screen name="stationdetails" component={StationDetailScreen} />
        <Stack.Screen name="viewcategories" component={ViewCategoryScreen} />
        <Stack.Screen name="addcategories" component={AddCategoryScreen} />
        <Stack.Screen name="editcategories" component={EditCategoryScreen} />
        <Stack.Screen name="viewusers" component={ViewUsersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
