import React, { useRef, useEffect } from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { colors } from '../../constants';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#282534', white: '#fff'};

const slides = [
  {
    id: '1',
    image: require('../user/assets/payment.json'),
    title: 'Inserisci un metodo di pagamento',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    image: require('../user/assets/scan.json'),
    title: 'Scansiona il QR code',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    image: require('../user/assets/chargephone.json'),
    title: 'Carica il telefono',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Slide = ({item}) => {
    const animation = useRef(null);
    useEffect(() => {
      if (animation.current) {
        animation.current.play(); // Avvia l'animazione quando il componente viene montato
      }
    }, []);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', display: 'flex', flex: 1, width: '100%', paddingHorizontal: 3, }}>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 380,
            height: 380,
            backgroundColor: 'rgba(0, 0, 0, 0)',
          }}
          source={item?.image}
        />
      <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const OnboardingStart = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 30,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('login')}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: COLORS.white,
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: COLORS.white,
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.dark}}>
      <StatusBar backgroundColor={colors.dark} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnboardingStart;