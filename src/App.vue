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
        fixed-header
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
        { text: 'Русский язык', align: 'center', value: 'calories', width: 140 },
        { text: 'Математика', value: 'fat', width: 140 },
        { text: 'Геометрия', value: 'carbs', width: 140 },
        { text: 'Физика', value: 'protein', width: 100 },
        { text: 'Химия', value: 'iron', width: 100 },
        { text: 'Биология', value: 'gavno', width: 110 },
        { text: 'Обществ-е', value: 'zhopa', width: 110 },
        { text: 'Право', value: 'zhopa', width: 100 },
        { text: 'История', value: 'zhopa', width: 100 },
        { text: 'Английский язык', value: 'zhopa', width: 150 },
        { text: 'Немецкий язык', value: 'zhopa', width: 140 },
        { text: 'ИЗО', value: 'zhopa', width: 100 },
        { text: 'Труд', value: 'zhopa', width: 100 },
        { text: 'Религии мира', value: 'zhopa', width: 140 },
        { text: 'Физ-ра', value: 'zhopa', width: 100 },
        { text: 'Самбо', value: 'zhopa', width: 100 },
        { text: 'Дзюдо', value: 'zhopa', width: 100 },
        { text: 'Стрельба', value: 'zhopa', width: 110 },
        { text: 'Езда на санках', value: 'zhopa', width: 150 },
        { text: 'ZHOPA', value: 'zhopa', width: 100 },
        { text: 'ZHOPA', value: 'zhopa', width: 100 }
      ],
      students: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
    }
  }
}
</script>

<style>
v-card-title {
  position: sticky
}
</style>
