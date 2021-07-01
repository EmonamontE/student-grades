<template>
  <v-container>
    <v-card
      elevation="8"
    >
      <v-card-title>
        Промежуточные оценки за полугодие
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Поиск"
          clearable
          @change="addToState(search)"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        height="75vh"
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
import listOfStudents10A from '../students/listOfStudents10A.js'

export default {
  methods: {
    addToState (value) {
      this.$store.commit('changeSearchedValueForClass10A', value)
    }
  },

  data () {
    return {
      search: this.$store.getters.curentSearchedValueForClass10A,
      headers: [
        {
          text: 'ФИО студента',
          align: 'start',
          value: 'name',
          width: 180
        },
        { text: 'Дата рождения', align: 'start', value: 'dateOfBirth', width: 145 },
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
      students: listOfStudents10A()
    }
  }
}
</script>

<style>

</style>
