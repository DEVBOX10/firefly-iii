@extends('layout.v2')
@section('vite')
    @vite(['resources/assets/v2/sass/app.scss', 'resources/assets/v2/dashboard.js'])
@endsection
@section('content')

    <div class="app-content">
        <!--begin::Container-->
        <div class="container-fluid">
            @include('partials.dashboard.boxes')
            <!-- row with account data -->
            <div x-data="accounts">
                <div class="row">
                    <div class="col-xl-8 col-lg-12 col-sm-12 col-xs-12">
                        <div class="row mb-2">
                            <div class="col">

                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title"><a href="{{ route('accounts.index',['asset']) }}"
                                                                  title="{{ __('firefly.yourAccounts') }}">{{ __('firefly.yourAccounts') }}</a>
                                        </h3>
                                    </div>
                                    <div class="card-body">
                                        <div id="account-chart"></div>
                                        <p class="text-end">
                                            <template x-if="autoConversion">
                                                <button type="button" @click="switchAutoConversion"
                                                        class="btn btn-outline-info btm-sm">
                                                    <span
                                                        class="fa-solid fa-comments-dollar"></span> {{ __('firefly.disable_auto_convert')  }}
                                                </button>
                                            </template>
                                            <template x-if="!autoConversion">
                                                <button type="button" @click="switchAutoConversion"
                                                        class="btn btn-outline-info btm-sm">
                                                    <span
                                                        class="fa-solid fa-comments-dollar"></span> {{ __('firefly.enable_auto_convert')  }}
                                                </button>
                                            </template>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col">
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title"><a href="{{ route('budgets.index') }}"
                                                                  title="{{ __('firefly.go_to_budgets') }}">{{ __('firefly.go_to_budgets') }}</a>
                                        </h3>
                                    </div>
                                    <div class="card-body">
                                        <div id="budget-chart"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col">
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="card-title"><a href="{{ route('accounts.index',['asset']) }}"
                                                                  title="{{ __('firefly.yourAccounts') }}">cat</a>
                                        </h3>
                                    </div>
                                    <div class="card-body">
                                        <div id="category-chart"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-12 col-sm-12 col-xs-12">
                        <div class="row">
                            <template x-for="account in accountList">
                                <div class="col-12 mb-2">
                                    <div class="card">
                                        <div class="card-header">
                                            <h3 class="card-title">
                                                <a :href="'{{ route('accounts.show','') }}/' + account.id"
                                                   x-text="account.name"></a>

                                                <span class="small text-muted">(<span
                                                        x-text="account.balance"></span>)</span>
                                            </h3>
                                        </div>
                                        <div class="card-body p-0">
                                            <table class="table table-sm">
                                                <tbody>
                                                <template x-for="group in account.groups">
                                                    <tr>
                                                        <td>
                                                            <template x-if="group.title">
                                                            <span><a
                                                                    :href="'{{route('transactions.show', '') }}/' + group.id"
                                                                    x-text="group.title"></a><br/></span>
                                                            </template>
                                                            <template x-for="transaction in group.transactions">
                                                            <span>
                                                                <template x-if="group.title">
                                                                    <span>-
                                                                        <span
                                                                            x-text="transaction.description"></span><br>
                                                                    </span>
                                                                </template>
                                                                <template x-if="!group.title">
                                                                    <span><a
                                                                            :href="'{{route('transactions.show', '') }}/' + group.id"
                                                                            x-text="transaction.description"></a><br>
                                                                    </span>
                                                                </template>
                                                            </span>
                                                            </template>
                                                        </td>
                                                        <td style="width:30%;" class="text-end">
                                                            <template x-if="group.title">
                                                                <span><br/></span>
                                                            </template>
                                                            <template x-for="transaction in group.transactions">
                                                            <span>
                                                                <span x-text="transaction.amount"></span><br>
                                                            </span>
                                                            </template>
                                                        </td>
                                                    </tr>
                                                </template>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>

@endsection
