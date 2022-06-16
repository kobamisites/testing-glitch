<script>
  import { metadata as settings } from '@settings/site.md'
</script>

<div class="social-media xml-auto">
  {#if settings.twitterLink}
    <a  href={settings.twitterLink} target="_blank" aria-label="twitter link">
      <svg width="38" height="31" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M33.5458 4.91083C35.2515 3.85775 36.3809 2.42038 36.9339 0.592357C35.3762 1.43972 33.7045 2.05547 31.971 2.42038C30.487 0.815287 28.6082 0 26.3558 0C24.154 0 22.2942 0.77707 20.7764 2.28875C20.0434 3.00659 19.4639 3.8674 19.0733 4.81843C18.6827 5.76946 18.4893 6.79069 18.505 7.81953C18.505 8.47558 18.5873 9.06157 18.752 9.55839C12.2585 9.33546 6.88395 6.62633 2.6493 1.41189C1.93156 2.6879 1.57269 3.98726 1.57269 5.33121C1.57269 8.09342 2.73163 10.2824 5.04528 11.8896C3.7259 11.7771 2.56275 11.4416 1.57269 10.8917C1.57269 12.8641 2.14899 14.5117 3.30371 15.9618C4.42539 17.3748 6.00615 18.3453 7.76846 18.7028C7.10983 18.8726 6.41531 18.9533 5.70179 18.9533C5.04316 18.9533 4.57663 18.8981 4.30009 18.7771C4.78562 20.3843 5.70179 21.6879 7.02539 22.6858C8.33386 23.685 9.92552 24.2377 11.5682 24.2633C8.7564 26.482 5.54136 27.5796 1.90412 27.5796C1.01328 27.5796 0.38209 27.5669 0 27.4989C3.58236 29.8386 7.57002 31 11.982 31C16.4974 31 20.4872 29.8493 23.9598 27.5478C27.4324 25.259 29.9951 22.4352 31.6417 19.1104C33.27 15.8932 34.1178 12.334 34.1158 8.72399V7.73036C35.6335 6.60493 36.9474 5.2253 38 3.65181C36.5785 4.27147 35.0802 4.69498 33.5458 4.91083Z" fill="currentColor"/> </svg>
    </a>
  {/if}
  {#if settings.facebookLink}
    <a  href={settings.facebookLink} target="_blank" aria-label="facebook link">
      <svg width="17" height="33" viewBox="0 0 17 33" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.3333 12.375H17V18.5625H11.3333V33H5.66667V18.5625H0V12.375H5.66667V9.78656C5.66667 7.33425 6.37311 4.23637 7.77844 2.54306C9.18378 0.845625 10.9386 0 13.0409 0H17V6.1875H13.0333C12.0927 6.1875 11.3333 7.01663 11.3333 8.04169V12.375Z" fill="currentColor"/> </svg>
    </a>
  {/if}
  {#if settings.instagramLink}
    <a  href={settings.instagramLink} target="_blank" aria-label="instagram link">
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48" height="48">    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"/></svg>
    </a>
  {/if}
  {#if settings.linkedInLink}
    <a  href={settings.linkedInLink} target="_blank" aria-label="linkedin link">
      <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.1994 20.4565H0.101562V0.130371H6.1994V20.4565ZM28.5581 20.4565H22.4603V9.59828C22.4603 6.76889 21.4521 5.36028 19.4541 5.36028C17.8707 5.36028 16.8666 6.14894 16.3625 7.72828V20.4565H10.2646C10.2646 20.4565 10.3459 2.16298 10.2646 0.130371H15.0779L15.4498 4.1956H15.5758C16.8259 2.16298 18.824 0.784872 21.5639 0.784872C23.6474 0.784872 25.3324 1.36417 26.619 2.81952C27.9138 4.2769 28.5581 6.23228 28.5581 8.97834V20.4565Z" fill="currentColor"/> </svg>
    </a>
  {/if}
  {#if settings.company_email}
    <a class="ml-4" href="mailto:{settings.company_email}" aria-label="Email" rel="noopener">
      <svg class="h-7 w-7 hover:text-teal" xmlns="http://www.w3.org/2000/svg" version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 16 16" width="16"
          height="16">&gt;<g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)">
        <path
            d="M 2.25,4.5h19.5c0.828,0,1.5,0.672,1.5,1.5v12c0,0.828-0.672,1.5-1.5,1.5H2.25c-0.828,0-1.5-0.672-1.5-1.5V6 C0.75,5.172,1.422,4.5,2.25,4.5z "
            stroke="currentColor" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M 15.687,9.975L19.5,13.5 " stroke="currentColor" fill="none" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M 8.313,9.975L4.5,13.5 " stroke="currentColor" fill="none" stroke-width="4" stroke-linecap="round"
            stroke-linejoin="round"></path>
        <path d="M 22.88,5.014l-9.513,6.56 c-0.823,0.568-1.911,0.568-2.734,0L1.12,5.014" stroke="currentColor"
            fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
      </g>
      </svg>
    </a>
  {/if}
</div>

<style lang="scss">
  .social-media {
    @apply flex space-x-8
    md:ml-auto;
  }
  .social-media a {
    @apply flex justify-center items-center p-2 w-12 rounded-full;
  }
</style>
