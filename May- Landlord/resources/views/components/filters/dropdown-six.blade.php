 <script>
     function _selectFiltersix() {
         this.selectFiltersix = $(this.$refs.selectFiltersix).select2();
         // Handle selection change
         this.selectFiltersix.on("select2:select", (event) => {
             this.$wire.set('storecode', event.target.value, true);
             isCheckedAll = false;
             this.$wire.filtering = true;
         });


         this.$wire.on('resetAll', (event) => {
             this.selectFiltersix.val("").trigger("change");
         });
     }

 </script>



 <div x-init="_selectFiltersix" wire:ignore>
     <select x-ref="selectFiltersix" data-placeholder="{{ $initialValue }}" class="w-mob-100" style="width: 200px">
         <option></option>
         @foreach($dataset as $item)
         <option value="{{ $item->{$keys} }}">{{ $item->{$keys} }}</option>
         @endforeach
     </select>
 </div>