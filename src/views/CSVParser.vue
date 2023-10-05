<script setup>
import Papa from "papaparse";
import { ref } from "vue";

const file = ref(null);
const parsed = ref(false);
let parsingFile;
let headers = [];
let contents = [];

const updateFile = (event) => {
    parsingFile = event.target.files[0];
    parsed.value = false;
    parseCSV();
}

const parseCSV = () => {
    if (!(!!parsingFile) || parsed.value) return;

    Papa.parse(
        parsingFile,
        {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                headers = results.meta.fields;
                contents = results.data;
                parsed.value = true;
            }
        }
    );
}

/*
export default {
    data() {
        return {
            file: '',
            content: [],
            parsed: false
        }
    },
    methods: {
        updateFile(event) {
            this.file = event.target.files[0];
        },
        parseCSV() {
            Papa.parse(
                this.file,
                {
                    header: true,
                    skipEmptyLines: true,
                    complete: function(results) {
                        this.content = results;
                        this.parsed = true;
                    }.bind(this)
                }
            );
        }
    }
}
*/
</script>


<template>
    <v-container>
        <v-row justify="center">
            <h1>Welcome to the CSV parser page!</h1>
        </v-row>
        <br><br><br>
        <v-row justify="center">
            <v-file-input
                label="Select a CSV File"
                accept="text/csv"
                v-model="file"
                @change="updateFile($event)"
                />
        </v-row>
        <!--
            <br><br>
            <v-row justify="center">
                <v-btn color="primary" @click="parseCSV">Parse</v-btn>
            </v-row>
        -->
        <br><br>
        <div>
            <v-table v-if="file && parsed">
				<thead>
					<th v-for="header in headers" :key="header">{{ header }}</th>
				</thead>
				<tbody>
					<tr v-for="row in contents" :key="row">
                        <td v-for="item in Object.entries(row)" :key="item[0]">{{ item[1] }}</td>
					</tr>
				</tbody>
			</v-table>
        </div>
    </v-container>
</template>