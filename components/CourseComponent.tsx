// import React from 'react';
// import { useGetAllCoursesQuery } from '../redux/features/api/coursesApi';
// import { View, Text, ActivityIndicator, Button } from 'react-native';

// const CourseComponent = () => {
//   const { data, error, isLoading, refetch } = useGetAllCoursesQuery({});

//   if (isLoading) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }

//   if (error) {
//     return (
//       <View>
//         <Text>Error: {error.toString()}</Text>
//         <Button title="Retry" onPress={refetch} />
//       </View>
//     );
//   }

//   return (
//     <View>
//       <Text>Courses: {JSON.stringify(data)}</Text>
//     </View>
//   );
// };

// export default CourseComponent;