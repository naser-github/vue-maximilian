<template>
  <base-card>
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResourcesButton"
    >
      Add New Resource
    </base-button>

    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResourcesButton"
    >
      Stored Resources
    </base-button>

    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </base-card>
</template>

<script>
import AddResource from "./AddResource.vue";
import StoredResources from "./StoredResources.vue";

export default {
  components: {
    AddResource,
    StoredResources,
  },

  data() {
    return {
      selectedTab: "stored-resources",

      storedResources: [
        {
          id: "vue-guide",
          title: "Official Guide",
          description: "This is a official Vue.Js documentation",
          link: "https://vuejs.org/",
        },

        {
          id: "google-guide",
          title: "Official Guide",
          description: "Google is tutor of everything",
          link: "https://www.google.com/",
        },
      ],
    };
  },

  provide() {
    return {
      resources: this.storedResources,
      addResource : this.addResource,
      removeResource : this.removeResource,
    };
  },

  computed: {
    addResourcesButton() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },

    storedResourcesButton() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
  },

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },

    addResource(title, desc, link){
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: desc,
        link: link
      };

      this.storedResources.push(newResource);

      this.selectedTab = 'stored-resources';
    },

    removeResource(resID){
      // this.storedResources = this.storedResources.filter(
      //   (res) => res.id != resID
      // )

      const resIndex = this.storedResources.findIndex( res => res.id === resID);
      this.storedResources.splice(resIndex, 1);

    }
  },
};
</script>
