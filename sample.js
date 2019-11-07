new Vue({
    el: '#app',
    data: {
        name: 'ordinary Joe',
        course: 'Web Engineer Course',
        acceptancePeriod: 'January 2019',
        defaultLastId: 3,
        students: [
            { id: 1, name: 'Noro Hiroyoshi', course: 'Machine learning course', acceptancePeriod: 'January 2019' },
            { id: 2, name: 'Shuji Tominaga', course: 'Web Engineer Course', acceptancePeriod: 'November 2017' },
            { id: 3, name: 'Saito Kazuki', course: 'Web Engineer Course', acceptancePeriod: 'November 2017' }
        ]
    },
    methods: {
        addStudent: function() {
            let element = this.students[this.students.length - 1];
            let new_id = element.id + 1;
            return this.students.push({ id: new_id, name: this.name, course: this.course, acceptancePeriod: this.acceptancePeriod })
        }
    }
})