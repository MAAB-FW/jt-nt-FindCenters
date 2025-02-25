// This file should be placed in the src directory or project root

// Extend the navigation types
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
  }
}

export type RootTabParamList = {
  Bookings: undefined;
  Activities: undefined;
  Notifications: undefined;
  Menu: undefined;
};

export type BookingScreenProps = BottomTabScreenProps<
  RootTabParamList,
  'Bookings'
>;
export type ActivitiesScreenProps = BottomTabScreenProps<
  RootTabParamList,
  'Activities'
>;
