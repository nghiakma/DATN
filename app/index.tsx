import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

const styles = StyleSheet.create({})



















// import React, { useContext } from 'react';
// import { ThemeContext } from '../context/theme.context';
// import { useGetUsersAllCoursesQuery } from '../redux/courses/coursesApi';
// import { View, Text, Button, ActivityIndicator } from 'react-native';


// export default function index() {
//     const { theme, toggleTheme } = useContext(ThemeContext);
//     const { data, error, isLoading, refetch } = useGetUsersAllCoursesQuery({});
//      console.log(data);
//       if (isLoading) {
//         return <ActivityIndicator size="large" color="#0000ff" />;
//       }
    
//       if (error) {
//         return (
//           <View>
//             <Text>Error: {error.toString()}</Text>
//             <Button title="Retry" onPress={refetch} />
//           </View>
//         );
//       }
    
//       return (
//         <View style={{ backgroundColor: theme.colors.background }}>
//             {data.courses && data.courses.map((course: any) => (
//                 <View key={course.id}>
//                     <Text style={{ fontSize: 24, fontWeight: 'bold', color: theme.colors.text }}>{course.name}</Text>
//                     <Text style={{ color: theme.colors.text }}>{course.description}</Text>
//                 </View>
//             ))}
//             <Button title="Toggle Theme" onPress={toggleTheme} />
//         </View>
//       );
// };
