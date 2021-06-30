<template>
  <v-container>
    <v-card>
      <v-card-title>
        Промежуточные оценки за полугодие
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Поиск"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        height="80vh"
        fixed-header
        hide-default-footer
        :headers="headers"
        :items="students"
        :search="search"
        :items-per-page="150"
      >
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import listOfStudents10B from '../students/listOfStudents10B.js'

export default {
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'ФИО студента',
          align: 'start',
          fixed: true,
          value: 'name',
          width: '180px'
        },
        { text: 'Дата рождения', align: 'start', value: 'dateOfBirth', width: '145px', fixed: true },
        { text: 'Русский язык', align: 'start', value: 'russian', width: 130 },
        { text: 'Математика', align: 'start', value: 'math', width: 125 },
        { text: 'Геометрия', align: 'start', value: 'geometry', width: 115 },
        { text: 'Физика', align: 'start', value: 'physics', width: 95 },
        { text: 'Химия', align: 'start', value: 'chemistry', width: 90 },
        { text: 'Биология', align: 'start', value: 'biology', width: 110 },
        { text: 'Обществ-е', align: 'start', value: 'socialScience', width: 115 },
        { text: 'Право', align: 'start', value: 'rights', width: 90 },
        { text: 'История', align: 'start', value: 'history', width: 100 },
        { text: 'Английский язык', align: 'start', value: 'english', width: 150 },
        { text: 'Немецкий язык', align: 'start', value: 'german', width: 145 },
        { text: 'ИЗО', align: 'start', value: 'art', width: 80 },
        { text: 'Труд', align: 'start', value: 'work', width: 100 },
        { text: 'Религии мира', align: 'start', value: 'religion', width: 130 },
        { text: 'Физ-ра', align: 'start', value: 'training', width: 100 },
        { text: 'Самбо', align: 'start', value: 'sambo', width: 90 },
        { text: 'Дзюдо', align: 'start', value: 'judo', width: 90 },
        { text: 'Стрельба', align: 'start', value: 'shooting', width: 110 },
        { text: 'Езда на санках', align: 'start', value: 'sledding', width: 135 }
      ],
      students: listOfStudents10B()
    }
  }
}
</script>

<style>

</style>
