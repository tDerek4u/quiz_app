<script setup>
import { Link,usePage } from "@inertiajs/vue3"
const page = usePage()
const appName = computed( ()=> page.props.appName)
import { computed } from 'vue';

</script>

<template>
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <Link herf="/" class="d-inline-flex link-body-emphasis text-decoration-none">
        <span class="fs-4">{{ appName }}</span>
        </Link>
      </div>
      <ul class="nav nav-pills">
        <li class="nav-item"><Link href="/" :class="{'nav-link active' :$page.url === '/' , 'nav-link' : $page.url != '/'}"  >Home</Link></li>
        <li class="nav-item"><Link href="/quiz"  :class="{'nav-link active' :$page.url === '/quiz' , 'nav-link' : $page.url != '/quiz'}">Quizz</Link></li>
        <li class="nav-item"><Link href="/questions"  :class="{'nav-link active' :$page.url === '/questions' , 'nav-link' : $page.url != '/questions'}">Questions</Link></li>
         <li class="nav-item"><Link href="/results"  :class="{'nav-link active' :$page.url === '/results' , 'nav-link' : $page.url != '/results'}">Result</Link></li>
      </ul>
    </header>
    
</template>