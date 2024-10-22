import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CORAL_COLOR = '#FF6B6B';
const LIGHT_CORAL = '#FFA5A5';

const CalendarScreen = ({ route }) => {
  const { isInstructor } = route.params;
  const [selectedDate, setSelectedDate] = useState('');
  const [showAddClass, setShowAddClass] = useState(false);
  
  const [availableClasses, setAvailableClasses] = useState({
    '2024-10-22': [
      { id: 1, time: '09:00', title: 'Morning Flow', instructor: 'Sarah', spots: 10 },
      { id: 2, time: '17:00', title: 'Power Yoga', instructor: 'Mike', spots: 8 },
    ],
  });

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const bookClass = (classId, date) => {
    Alert.alert(
      'Confirm Booking',
      'Would you like to book this class?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Book',
          onPress: () => {
            Alert.alert('Success', 'Class booked successfully!');
          },
        },
      ]
    );
  };

  const addClass = (date, classDetails) => {
    const newClass = {
      id: Date.now(),
      ...classDetails,
    };

    setAvailableClasses(prev => ({
      ...prev,
      [date]: [...(prev[date] || []), newClass],
    }));
  };

  const ClassList = ({ date }) => {
    const dayClasses = availableClasses[date] || [];

    return (
      <ScrollView style={styles.classList}>
        {dayClasses.map((yogaClass) => (
          <TouchableOpacity
            key={yogaClass.id}
            style={styles.classCard}
            onPress={() => !isInstructor && bookClass(yogaClass.id, date)}
          >
            <Text style={styles.classTitle}>{yogaClass.title}</Text>
            <Text style={styles.classInfo}>Time: {yogaClass.time}</Text>
            <Text style={styles.classInfo}>Instructor: {yogaClass.instructor}</Text>
            <Text style={styles.classInfo}>Available Spots: {yogaClass.spots}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: CORAL_COLOR },
        }}
        theme={{
          selectedDayBackgroundColor: CORAL_COLOR,
          todayTextColor: CORAL_COLOR,
          arrowColor: CORAL_COLOR,
        }}
      />
      
      {selectedDate && (
        <View style={styles.classesContainer}>
          <Text style={styles.dateHeader}>
            Classes for {selectedDate}
          </Text>
          
          {isInstructor && (
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setShowAddClass(!showAddClass)}
            >
              <Text style={styles.addButtonText}>Add Class</Text>
            </TouchableOpacity>
          )}
          
          <ClassList date={selectedDate} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  classesContainer: {
    padding: 15,
    flex: 1,
  },
  dateHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: CORAL_COLOR,
  },
  classList: {
    flex: 1,
  },
  classCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: LIGHT_CORAL,
  },
  classTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: CORAL_COLOR,
  },
  classInfo: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  addButton: {
    backgroundColor: CORAL_COLOR,
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CalendarScreen;