import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const days: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const timeSlots: string[] = ['12:00', '13:00', '14:00', '15:00', '16:00'];
const venueName: string = 'PLCE Padel';
const venuePlace: string = 'Södertälje, Sweden - 17km';

interface DayInfo {
  day: string;
  date: number;
  full: Date;
}

const Calendar: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(2); // Tuesday selected by default

  // Generate a week of days starting from the current date
  const today = new Date();
  const startOfWeek = new Date(today);
  // Go to the start of the week (Sunday)
  startOfWeek.setDate(today.getDate() - today.getDay());

  const weekDays: DayInfo[] = Array.from({length: 7}, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return {
      day: days[date.getDay()],
      date: date.getDate(),
      full: date,
    };
  });

  return (
    <View style={styles.container}>
      {/* Days of the week */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.daysContainer}>
        {weekDays.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dayItem,
              selectedDay === index && styles.selectedDayItem,
            ]}
            onPress={() => setSelectedDay(index)}>
            <Text
              style={[
                styles.dateText,
                selectedDay === index && styles.selectedDateText,
              ]}>
              {day.date}
            </Text>
            <Text
              style={[
                styles.dayText,
                selectedDay === index && styles.selectedDayText,
              ]}>
              {day.day}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Venue information */}
      <View style={styles.venueContainer}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://images.unsplash.com/photo-1689942963385-f5bd03f3b270?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
        <View style={styles.venue}>
          <Text style={styles.venueName}>{venueName}</Text>
          <Text style={styles.venuePlace}>{venuePlace}</Text>
        </View>
      </View>

      {/* Time slots */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.timeSlotsContainer}>
        {timeSlots.map((time, index) => (
          <TouchableOpacity key={index} style={styles.timeSlotItem}>
            <Text style={styles.timeSlotText}>{time}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  daysContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  dayItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  selectedDayItem: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#b2db00',
    borderRadius: 50,
  },
  dayText: {
    fontSize: 14,
    color: '#50586d',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 20,
    color: '#50586d',
  },
  selectedDayText: {
    color: '#b2db00',
    fontWeight: 'bold',
  },
  selectedDateText: {
    color: '#b2db00',
    fontWeight: 'bold',
  },
  venueContainer: {
    paddingHorizontal: 16,
    // paddingBottom: 16,
    borderBottomColor: '#eee',
    position: 'relative',
  },
  img: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    filter: 'grayscale(1)',
  },
  venue: {
    position: 'absolute',
    bottom: 6,
    left: 25,
  },
  venueName: {
    fontSize: 26,
    color: '#fff',
  },
  venuePlace: {
    fontSize: 20,
    color: '#fff',
  },
  timeSlotsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 10,
  },
  timeSlotItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 10,
    borderRadius: 50,
  },
  timeSlotText: {
    fontSize: 16,
  },
});

export default Calendar;
