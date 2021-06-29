<template>
  <v-container>
    <v-card>
      <v-card-title>
        Промежуточные оценки за полугодие
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        height="85vh"
        fixed-header
        :headers="headers"
        :items="students"
        :search="search"
        :items-per-page="150"
      >
      </v-data-table>
    </v-card>
  </v-container>

  <!-- <v-simple-table
    'fixed'-header
    large
  >
    <template v-slot:default>
      <thead>
        <tr>
          <th class='text-left'>
            Name
          </th>
          <th>
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in students"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table> -->
</template>

<script>
export default {
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'ФИО студента',
          align: 'center',
          sortable: false,
          value: 'name',
          width: 250
        },
        { text: 'Дата рождения', align: 'center', value: 'dateOfBirth', width: 150 },
        { text: 'Русский язык', align: 'center', value: 'russian', width: 140 },
        { text: 'Математика', value: 'math', width: 140 },
        { text: 'Геометрия', value: 'geometry', width: 140 },
        { text: 'Физика', value: 'physics', width: 100 },
        { text: 'Химия', value: 'chemistry', width: 100 },
        { text: 'Биология', value: 'biology', width: 110 },
        { text: 'Обществ-е', value: 'socialScience', width: 110 },
        { text: 'Право', value: 'rights', width: 100 },
        { text: 'История', value: 'history', width: 100 },
        { text: 'Английский язык', value: 'english', width: 150 },
        { text: 'Немецкий язык', value: 'german', width: 140 },
        { text: 'ИЗО', value: 'art', width: 100 },
        { text: 'Труд', value: 'work', width: 100 },
        { text: 'Религии мира', value: 'religion', width: 140 },
        { text: 'Физ-ра', value: 'training', width: 100 },
        { text: 'Самбо', value: 'sambo', width: 100 },
        { text: 'Дзюдо', value: 'judo', width: 100 },
        { text: 'Стрельба', value: 'shooting', width: 110 },
        { text: 'Езда на санках', value: 'sledding', width: 150 }
      ],
      students: [
        {
          name: 'Быков В.А.',
          russian: 5,
          math: 5,
          geometry: 5,
          physics: 5,
          chemistry: 5,
          biology: 5,
          socialScience: 5,
          rights: 5,
          history: 5,
          english: 5,
          german: 5,
          art: 5,
          work: 5,
          religion: 5,
          training: 5,
          sambo: 5,
          judo: 5,
          shooting: 5,
          sledding: 5
        },
        {
          name: 'Билялетдиинов З.Х.',
          russian: 4,
          math: 4,
          geometry: 4,
          physics: 4,
          chemistry: 4,
          biology: 4,
          socialScience: 4,
          rights: 5,
          history: 5,
          english: 5,
          german: 5,
          art: 5,
          work: 5,
          religion: 5,
          training: 5,
          sambo: 5,
          judo: 5,
          shooting: 5,
          sledding: 5
        },
        {
          name: 'Овечкин А.А.',
          russian: 5,
          math: 5,
          geometry: 5,
          physics: 5,
          chemistry: 5,
          biology: 5,
          socialScience: 5,
          rights: 5,
          history: 5,
          english: 5,
          german: 5,
          art: 5,
          work: 5,
          religion: 5,
          training: 5,
          sambo: 5,
          judo: 5,
          shooting: 5,
          sledding: 5
        },
        {
          name: 'Орлов А.А.',
          russian: 5,
          math: 5,
          geometry: 5,
          physics: 5,
          chemistry: 5,
          biology: 5,
          socialScience: 5,
          rights: 5,
          history: 5,
          english: 5,
          german: 5,
          art: 5,
          work: 5,
          religion: 5,
          training: 5,
          sambo: 5,
          judo: 5,
          shooting: 5,
          sledding: 5
        },
        {
          name: 'Тарасенко А.А.',
          russian: 4,
          math: 4,
          geometry: 4,
          physics: 4,
          chemistry: 4,
          biology: 4,
          socialScience: 4,
          rights: 4,
          history: 4,
          english: 4,
          german: 4,
          art: 4,
          work: 4,
          religion: 4,
          training: 4,
          sambo: 4,
          judo: 4,
          shooting: 4,
          sledding: 4
        },
        {
          name: 'Капризов К.А.',
          russian: 3,
          math: 3,
          geometry: 3,
          physics: 3,
          chemistry: 3,
          biology: 3,
          socialScience: 3,
          rights: 3,
          history: 3,
          english: 5,
          german: 3,
          art: 3,
          work: 5,
          religion: 3,
          training: 5,
          sambo: 3,
          judo: 5,
          shooting: 5,
          sledding: 3
        },
        {
          name: 'Знарок О.А.',
          russian: 5,
          math: 5,
          geometry: 5,
          physics: 5,
          chemistry: 5,
          biology: 5,
          socialScience: 5,
          rights: 5,
          history: 5,
          english: 5,
          german: 5,
          art: 5,
          work: 5,
          religion: 5,
          training: 5,
          sambo: 5,
          judo: 5,
          shooting: 5,
          sledding: 5
        },
        {
          name: 'Ковальчук С.А.',
          russian: 2,
          math: 2,
          geometry: 2,
          physics: 2,
          chemistry: 2,
          biology: 2,
          socialScience: 2,
          rights: 2,
          history: 2,
          english: 2,
          german: 2,
          art: 2,
          work: 2,
          religion: 2,
          training: 2,
          sambo: 2,
          judo: 2,
          shooting: 2,
          sledding: 2
        },
        {
          name: 'Малкин Е.А.',
          russian: 5,
          math: 5,
          geometry: 5,
          physics: 5,
          chemistry: 5,
          biology: 5,
          socialScience: 5,
          rights: 5,
          history: 5,
          english: 5,
          german: 5,
          art: 5,
          work: 5,
          religion: 5,
          training: 5,
          sambo: 5,
          judo: 5,
          shooting: 5,
          sledding: 5
        },
        {
          name: 'Телегин И.А.',
          russian: 2,
          math: 2,
          geometry: 2,
          physics: 2,
          chemistry: 2,
          biology: 2,
          socialScience: 2,
          rights: 2,
          history: 2,
          english: 3,
          german: 3,
          art: 3,
          work: 3,
          religion: 2,
          training: 2,
          sambo: 3,
          judo: 3,
          shooting: 3,
          sledding: 3
        },
        {
          name: 'Кучеров Н.А.',
          russian: 5,
          math: 5,
          geometry: 5,
          physics: 5,
          chemistry: 5,
          biology: 5,
          socialScience: 5,
          rights: 5,
          history: 5,
          english: 5,
          german: 5,
          art: 5,
          work: 5,
          religion: 5,
          training: 5,
          sambo: 5,
          judo: 5,
          shooting: 5,
          sledding: 5
        },
        {
          name: 'Василевский А.А.',
          russian: 5,
          math: 5,
          geometry: 5,
          physics: 5,
          chemistry: 5,
          biology: 5,
          socialScience: 5,
          rights: 5,
          history: 5,
          english: 5,
          german: 5,
          art: 5,
          work: 5,
          religion: 5,
          training: 5,
          sambo: 5,
          judo: 5,
          shooting: 5,
          sledding: 5
        },
        {
          name: 'Грецки У.А.',
          russian: 5,
          math: 5,
          geometry: 5,
          physics: 5,
          chemistry: 5,
          biology: 5,
          socialScience: 5,
          rights: 5,
          history: 5,
          english: 5,
          german: 5,
          art: 5,
          work: 5,
          religion: 5,
          training: 5,
          sambo: 5,
          judo: 5,
          shooting: 5,
          sledding: 5
        },
        {
          name: 'Третьяк В.А.',
          russian: 5,
          math: 5,
          geometry: 5,
          physics: 5,
          chemistry: 5,
          biology: 5,
          socialScience: 5,
          rights: 5,
          history: 5,
          english: 5,
          german: 5,
          art: 5,
          work: 5,
          religion: 5,
          training: 5,
          sambo: 5,
          judo: 5,
          shooting: 5,
          sledding: 5
        },
        {
          name: 'Харламов В.А.',
          russian: 5,
          math: 5,
          geometry: 5,
          physics: 5,
          chemistry: 5,
          biology: 5,
          socialScience: 5,
          rights: 5,
          history: 5,
          english: 5,
          german: 5,
          art: 5,
          work: 5,
          religion: 5,
          training: 5,
          sambo: 5,
          judo: 5,
          shooting: 5,
          sledding: 5
        },
        {
          name: 'Дацюк П.А.',
          russian: 4,
          math: 4,
          geometry: 4,
          physics: 4,
          chemistry: 4,
          biology: 5,
          socialScience: 5,
          rights: 5,
          history: 5,
          english: 5,
          german: 4,
          art: 4,
          work: 4,
          religion: 5,
          training: 4,
          sambo: 4,
          judo: 5,
          shooting: 5,
          sledding: 4
        },
        {
          name: 'Кросби С.А.',
          russian: 5,
          math: 5,
          geometry: 5,
          physics: 5,
          chemistry: 5,
          biology: 5,
          socialScience: 5,
          rights: 5,
          history: 5,
          english: 5,
          german: 5,
          art: 5,
          work: 5,
          religion: 5,
          training: 5,
          sambo: 5,
          judo: 5,
          shooting: 5,
          sledding: 5
        },
        {
          name: 'Буре П.А.',
          russian: 10,
          math: 10,
          geometry: 10,
          physics: 10,
          chemistry: 10,
          biology: 10,
          socialScience: 10,
          rights: 10,
          history: 10,
          english: 10,
          german: 10,
          art: 10,
          work: 10,
          religion: 10,
          training: 10,
          sambo: 10,
          judo: 10,
          shooting: 10,
          sledding: 10
        },
        {
          name: 'Самсонов А.А.',
          russian: 3,
          math: 3,
          geometry: 3,
          physics: 3,
          chemistry: 3,
          biology: 3,
          socialScience: 3,
          rights: 3,
          history: 3,
          english: 3,
          german: 3,
          art: 3,
          work: 3,
          religion: 3,
          training: 3,
          sambo: 3,
          judo: 3,
          shooting: 3,
          sledding: 3
        }
      ]
    }
  }
}
</script>

<style>

</style>
