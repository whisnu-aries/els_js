import { useState, useRef } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import {
  MapPinIcon as Pin,
  CalendarDaysIcon as Calendar,
} from "react-native-heroicons/outline";

import Styles from "./EventDetail.Style";
import { Colors } from "../../../Constants/Colors";

import Title from "../../../Component/Text/Title";
import HorizontalDivider from "../../../Component/Divider/HorizontalDivider";
import EventDetailHeader from "./EventDetailHeader";
import EventDetailFooter from "./EventDetailFooter";

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan purus sem, ac viverra ante ullamcorper sit amet. Curabitur felis tellus, facilisis vel neque ac, rutrum ullamcorper augue. Integer luctus lacus sit amet leo congue gravida. Vestibulum ut odio eget quam lacinia posuere. Nam sollicitudin nisi ac felis blandit pretium. Duis efficitur ipsum eu mauris blandit ullamcorper. Sed posuere, magna quis lobortis rhoncus, odio elit sodales orci, quis egestas odio metus non lorem. In nec lacus ut nunc ornare molestie ac vitae massa. Etiam et viverra nulla. Duis nec augue id sapien convallis consequat. Cras vitae ligula nec neque laoreet aliquet nec quis metus. Nulla a purus vehicula, tempus dolor et, aliquam eros.

Ut ac elit orci. Sed ac urna at tortor cursus scelerisque et vel nulla. Donec ultrices pulvinar efficitur. Nam elementum ut erat a mollis. Etiam et magna at massa consectetur suscipit a id augue. Nullam euismod nunc in velit venenatis luctus. Praesent sagittis, velit ac semper dignissim, dui justo porttitor libero, in elementum neque est non ante. Ut tincidunt vel velit sit amet aliquam. Sed at posuere urna. Donec vestibulum sem risus, non mattis tellus rhoncus ac. Aenean auctor velit ut interdum sollicitudin. Praesent malesuada a nibh sed gravida. Sed at accumsan velit.

Ut sagittis, magna ut fringilla maximus, erat diam dignissim ipsum, maximus convallis mauris sapien a eros. Aenean dapibus fermentum nulla, nec rhoncus mi rutrum non. In vel nibh urna. Vivamus eleifend sit amet elit hendrerit sagittis. Etiam porta enim mi, at blandit nibh accumsan eget. Proin ac leo in orci elementum efficitur. Sed condimentum quam in sapien lobortis aliquet.

Aenean ullamcorper fermentum faucibus. Nunc sit amet accumsan sem. Morbi tincidunt consequat risus, a ultrices odio dictum sed. Proin luctus tincidunt nibh fringilla viverra. Ut aliquam nisi at justo tempus, a blandit ipsum elementum. Aliquam elit augue, rutrum sit amet lorem in, dictum tincidunt massa. In sagittis non erat id dapibus. Etiam nisi tortor, iaculis id nulla ut, sodales ullamcorper ipsum. Aliquam scelerisque facilisis commodo. Curabitur eu velit libero. Nulla et ornare risus. Curabitur viverra urna iaculis blandit mollis.

Fusce sollicitudin fermentum dui ut cursus. Aenean massa eros, dignissim in sollicitudin ac, mattis vitae ante. Phasellus eget mattis mi, malesuada ornare purus. Praesent sit amet nulla ut nunc tristique ultrices. Maecenas dignissim mauris in eros finibus, ac semper ante accumsan. Cras enim ex, porttitor vel sagittis at, mattis id quam. Cras molestie eros id quam imperdiet sodales. Cras luctus laoreet convallis."

Ut ac elit orci. Sed ac urna at tortor cursus scelerisque et vel nulla. Donec ultrices pulvinar efficitur. Nam elementum ut erat a mollis. Etiam et magna at massa consectetur suscipit a id augue. Nullam euismod nunc in velit venenatis luctus. Praesent sagittis, velit ac semper dignissim, dui justo porttitor libero, in elementum neque est non ante. Ut tincidunt vel velit sit amet aliquam. Sed at posuere urna. Donec vestibulum sem risus, non mattis tellus rhoncus ac. Aenean auctor velit ut interdum sollicitudin. Praesent malesuada a nibh sed gravida. Sed at accumsan velit.

Ut sagittis, magna ut fringilla maximus, erat diam dignissim ipsum, maximus convallis mauris sapien a eros. Aenean dapibus fermentum nulla, nec rhoncus mi rutrum non. In vel nibh urna. Vivamus eleifend sit amet elit hendrerit sagittis. Etiam porta enim mi, at blandit nibh accumsan eget. Proin ac leo in orci elementum efficitur. Sed condimentum quam in sapien lobortis aliquet.

Aenean ullamcorper fermentum faucibus. Nunc sit amet accumsan sem. Morbi tincidunt consequat risus, a ultrices odio dictum sed. Proin luctus tincidunt nibh fringilla viverra. Ut aliquam nisi at justo tempus, a blandit ipsum elementum. Aliquam elit augue, rutrum sit amet lorem in, dictum tincidunt massa. In sagittis non erat id dapibus. Etiam nisi tortor, iaculis id nulla ut, sodales ullamcorper ipsum. Aliquam scelerisque facilisis commodo. Curabitur eu velit libero. Nulla et ornare risus. Curabitur viverra urna iaculis blandit mollis.

Fusce sollicitudin fermentum dui ut cursus. Aenean massa eros, dignissim in sollicitudin ac, mattis vitae ante. Phasellus eget mattis mi, malesuada ornare purus. Praesent sit amet nulla ut nunc tristique ultrices. Maecenas dignissim mauris in eros finibus, ac semper ante accumsan. Cras enim ex, porttitor vel sagittis at, mattis id quam. Cras molestie eros id quam imperdiet sodales. Cras luctus laoreet convallis."
`;

const handleScroll = (event, EventDetailMethod) => {
  let scrollY = event.nativeEvent.contentOffset.y;
  EventDetailMethod.setPosition(scrollY);
};

const renderImage = () => (
  <Image
    style={Styles.image}
    source={{
      uri: "https://images.unsplash.com/photo-1722503281689-04fea84df54a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
    }}
  />
);

const renderDate = () => (
  <View style={Styles.eventHeaderItem}>
    <Calendar style={{ color: Colors.black }} size={20} />
    <Text>Sat 08:00-17:00, 17 Aug 2024</Text>
  </View>
);

const renderLocation = () => (
  <View style={Styles.eventHeaderItem}>
    <Pin style={{ color: Colors.black }} size={20} />
    <Text>BTC Fashion Mall</Text>
  </View>
);

const renderEventHeader = () => (
  <View style={Styles.headerContainer}>
    <Title text="Back to Barrack 2024: Reconnecting" />
    <View style={Styles.headerInnerContainer}>
      {renderDate()}
      {renderLocation()}
    </View>
  </View>
);

const renderEventDescription = () => (
  <View style={Styles.eventBodyContainer}>
    <Title text="About Description" />
    <Text>{text}</Text>
  </View>
);

const renderBody = () => (
  <View style={Styles.bodyContainer}>
    {renderEventHeader()}
    <HorizontalDivider />
    {renderEventDescription()}
  </View>
);

const getEventDetailMethod = () => {
  const [position, setPosition] = useState(0);

  return {
    position,
    setPosition,
  };
};

const EventDetail = () => {
  const EventDetailMethod = getEventDetailMethod();
  const scrollViewRef = useRef(null);

  return (
    <>
      <EventDetailHeader position={EventDetailMethod.position} />
      <ScrollView
        ref={scrollViewRef}
        onScroll={(event) => handleScroll(event, EventDetailMethod)}
        style={Styles.container}
      >
        {renderImage()}
        {renderBody()}
      </ScrollView>
      <EventDetailFooter />
    </>
  );
};

export default EventDetail;
