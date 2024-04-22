<template>
  <div>
    <h2>Panel Administracyjny</h2>
    <nav>
      <button @click="choiceOptions('news')">Aktualności <span>+</span></button>
      <button @click="choiceOptions('events')">
        Wydarzenia <span>+</span>
      </button>
      <button @click="choiceOptions('photo')">Zdjęcie <span>+</span></button>
    </nav>

    <base-container>
      <form @submit.prevent="submitForm">
        <div
          class="form-control"
          v-if="title.isActive"
          :class="{ invalid: !title.isValid }"
        >
          <label for="title">Tytuł</label>
          <input
            type="text"
            id="title"
            v-model.trim="title.value"
            @blur="clearValidity('title')"
          />
          <p v-if="!title.isValid">Brak wprowadzonej wartości.</p>
        </div>
        <div
          class="form-control"
          v-if="email.isActive"
          :class="{ invalid: !email.isValid }"
        >
          <label for="emial">Email</label>
          <input
            type="email"
            id="email"
            v-model.trim="email.value"
            @blur="clearValidity('email')"
          />
          <p v-if="!email.isValid">Brak wprowadzonej wartości lub brak "@".</p>
        </div>
        <div
          class="form-control"
          v-if="phone.isActive"
          :class="{ invalid: !phone.isValid }"
        >
          <label for="phone">Telefon</label>
          <input
            type="text"
            id="phone"
            v-model.trim="phone.value"
            @blur="clearValidity('phone')"
          />
          <p v-if="!phone.isValid">Brak wprowadzonej wartości.</p>
        </div>
        <div
          class="form-control"
          v-if="description.isActive"
          :class="{ invalid: !description.isValid }"
        >
          <label for="description">Opis</label>
          <textarea
            rows="5"
            id="description"
            v-model.trim="description.value"
            @blur="clearValidity('description')"
          />
          <p v-if="!description.isValid">Brak opisu.</p>
        </div>
        <div
          class="form-control"
          v-if="date.isActive"
          :class="{ invalid: !date.isValid }"
        >
          <label for="date">Data</label>
          <input
            type="date"
            id="date"
            v-model.trim="date.value"
            @blur="clearValidity('date')"
          />
          <p v-if="!date.isValid">Brak wprowadzonej wartości.</p>
        </div>
        <div
          class="form-control"
          v-if="images.isActive"
          :class="{ invalid: !images.isValid }"
        >
          <label for="file">Wybierz zdjcia</label>
          <input
            type="file"
            id="file"
            name="file"
            accept=".jpg, .jpeg, .png"
            @change="previewFiles"
            @blur="clearValidity('images')"
            multiple
          />
          <p v-if="!images.isValid">Nie dodano jeszcze zdjęcia</p>
        </div>
        <div
          class="form-control"
          v-if="author.isActive"
          :class="{ invalid: !author.isValid }"
        >
          <label for="Author">Autor</label>
          <input
            type="text"
            id="Author"
            v-model.trim="author.value"
            @blur="clearValidity('author')"
          />
          <p v-if="!author.isValid">Brak wprowadzonej wartości</p>
        </div>

        <p class="invalid" v-if="!formIsValid">
          Nie wszystkie pola zosta uzupełniones
        </p>
        <button>Wyślij</button>
      </form>
    </base-container>
  </div>
</template>
<script>
import { onMounted, reactive, ref } from "vue";
import { useNewsStore } from "@/Store/news";
import { calendarStore } from "@/Store/calerndar";
import { useGalleryStore } from "@/Store/gallery";
import { useRouter } from "vue-router";
export default {
  setup() {
    const newsStore = useNewsStore();
    const calendarS = calendarStore();
    const galleryStore = useGalleryStore();
    const route = useRouter();
    const activeOption = ref("news");
    const formIsValid = ref(true);

    const title = reactive({
      value: "",
      isValid: true,
      isActive: true,
    });
    const email = reactive({
      value: "",
      isValid: true,
      isActive: true,
    });
    const phone = reactive({
      value: "",
      isValid: true,
      isActive: true,
    });
    const date = reactive({
      value: "",
      isValid: true,
      isActive: true,
    });
    const description = reactive({
      value: "",
      isValid: true,
      isActive: true,
    });
    const images = reactive({
      value: [],
      isValid: true,
      isActive: true,
    });
    const author = reactive({
      value: "",
      isValid: true,
      isActive: true,
    });

    const clearValidity = (input) => {
      eval(input).isValid = true;
    };
    function previewFiles(event) {
      const files = event.target.files;
      images.value.push(files);
    }
    function choiceOptions(val) {
      activeOption.value = val;
      if (activeOption.value === "news") {
        title.isActive = true;
        phone.isActive = false;
        email.isActive = false;
        description.isActive = true;
        date.isActive = false;
        images.isActive = true;
        author.isActive = true;
      }
      if (activeOption.value === "events") {
        title.isActive = true;
        phone.isActive = true;
        email.isActive = true;
        description.isActive = true;
        date.isActive = true;
        images.isActive = false;
        author.isActive = false;
      }
      if (activeOption.value === "photo") {
        title.isActive = true;
        phone.isActive = false;
        email.isActive = false;
        description.isActive = false;
        date.isActive = false;
        images.isActive = true;
        author.isActive = false;
      }
    }
    function inputValid() {
      formIsValid.value = true;
      if (title.value === "" && title.isActive) {
        title.isValid = false;
        formIsValid.value = false;
      }
      if (phone.value === "" && phone.isActive) {
        phone.isValid = false;
        formIsValid.value = false;
      }
      if (email.value === "" && email.isActive && !email.value.includes("@")) {
        email.isValid = false;
        formIsValid.value = false;
      }
      if (description.value === "" && description.isActive) {
        description.isValid = false;
        formIsValid.value = false;
      }
      if (date.value === "" && date.isActive) {
        date.isValid = false;
        formIsValid.value = false;
      }
      if (images.value.length === 0 && images.isActive) {
        images.isValid = false;
        formIsValid.value = false;
      }

      if (author.value === "" && author.isActive) {
        author.isValid = false;
        formIsValid.value = false;
      }
    }
    async function submitForm() {
      inputValid();
      if (!formIsValid.value) return;

      if (activeOption.value === "news") {
        const message = {
          title: title.value,
          description: description.value,
          img: images.value[0],
          author: author.value,
        };
        newsStore.createNews(message);
        route.replace("/news");
      }
      if (activeOption.value === "events") {
        const message = {
          title: title.value,
          phone: phone.value,
          date: date.value,
          email: email.value,
          description: description.value,
        };

        calendarS.cerateEvent(message);
        route.replace("/eventCalendar");
      }
      if (activeOption.value === "photo") {
        const message = {
          title: title.value,
          images: images.value[0],
        };

        galleryStore.createPicture(message);

        route.replace("/gallery");
      }
    }
    onMounted(() => choiceOptions("news"));

    return {
      previewFiles,
      choiceOptions,
      submitForm,
      inputValid,
      clearValidity,
      activeOption,
      formIsValid,
      title,
      email,
      phone,
      date,
      description,
      images,
      author,
    };
  },
};
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
