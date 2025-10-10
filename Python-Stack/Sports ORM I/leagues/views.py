from django.shortcuts import render, redirect
from .models import League, Team, Player
from . import models
from . import team_maker

def index(request):
	# BaseBall leagues:
	baseball_leagues = models.First.get_all_baseBall_leagus()
	women_leagues = models.First.get_all_women_leagues()
	hockies = models.First.get_hockeis()
	leagues_exclude_football = models.First.get_sport_other_than_football()
	conference_leagues = models.First.get_all_conference_leagues()
	atlantic_leagues = models.First.get_all_atlantic_region()
	teams_in_dallas = models.First.get_all_teams_in_dallas()
	raptors_teams = models.First.get_all_raptors_teams()
	all_teams_location_include_city = models.First.get_all_teams_location_include_city()
	all_teams_begins_with_T = models.First.get_all_teams_begins_with_T()
	all_teams_order_alphabetically_by_location = models.First.get_all_teams_order_alphabetically_by_location()
	all_teams_order_alphabetically_by_team_name = models.First.get_all_teams_order_alphabetically_by_team_name()
	every_player_with_lastname_Cooper = models.First.get_every_player_with_lastname_Cooper()
	every_player_with_firstname_Joshua = models.First.get_every_player_with_firstname_Joshua()
	Cooper_Joshua = models.First.question_15()
	Alexander_Wyatt = models.First.question_16()
	
	context = {
		"leagues": League.objects.all(),
		"teams": Team.objects.all(),
		"players": Player.objects.all(),
		'baseball_leagues': baseball_leagues,
		'women_leagues' : women_leagues,
		'hockies' : hockies,
		'leagues_exclude_football' : leagues_exclude_football,
		'conference_leagues' : conference_leagues,
		'atlantic_leagues' : atlantic_leagues,
		'teams_in_dallas' : teams_in_dallas,
		'raptors_teams' : raptors_teams,
		'all_teams_location_include_city' : all_teams_location_include_city,
		'all_teams_begins_with_T' : all_teams_begins_with_T,
		'all_teams_order_alphabetically_by_location' : all_teams_order_alphabetically_by_location,
		'all_teams_order_alphabetically_by_team_name' : all_teams_order_alphabetically_by_team_name,
		'every_player_with_lastname_Cooper' : every_player_with_lastname_Cooper,
		'every_player_with_firstname_Joshua' : every_player_with_firstname_Joshua,
		'Cooper_Joshua' : Cooper_Joshua,
		'Alexander_Wyatt' : Alexander_Wyatt,
	}
	return render(request, "leagues/index.html", context)

def index2(request):
	all_teams_in_atlantic_soccer_conference = models.Second.question_1()
	all_players_on_boston_penguins = models.Second.question_2()
	all_players_in_the_international_collegiate_baseball_conference = models.Second.question_3()
	all_players_in_the_american_conference_of_amateur_football_with_last_name_lopez = models.Second.question_4()
	all_football_players = models.Second.question_5()
	all_teams_with_current_player_named_sophia = models.Second.question_6()
	all_leagues_with_current_player_named_sophia = models.Second.question_7()
	all_people_named_flores_not_in_washington_roughriders = models.Second.question_8()
	all_teams_samuel_evans_has_played_for = models.Second.question_9()
	all_players_with_manitoba_tiger_cats = models.Second.question_10()
	all_former_players_of_wichita_vikings = models.Second.question_11()
	all_teams_jacob_gray_played_for_before_oregon_colts = models.Second.question_12()
	all_joshuas_in_atlantic_federation_of_amateur_baseball_players = models.Second.question_13()
	all_teams_with_12_or_more_players = models.Second.question_14()
	all_players_and_team_count_sorted = models.Second.question_15()

	context = {
		"teams_in_atlantic_soccer_conference": all_teams_in_atlantic_soccer_conference,
		"players_on_boston_penguins": all_players_on_boston_penguins,
		"players_in_international_collegiate_baseball_conference": all_players_in_the_international_collegiate_baseball_conference,
		"players_in_american_conference_of_amateur_football_with_last_name_lopez": all_players_in_the_american_conference_of_amateur_football_with_last_name_lopez,
		"all_football_players": all_football_players,
		"teams_with_player_named_sophia": all_teams_with_current_player_named_sophia,
		"leagues_with_player_named_sophia": all_leagues_with_current_player_named_sophia,
		"people_named_flores_not_in_washington_roughriders": all_people_named_flores_not_in_washington_roughriders,
		"teams_samuel_evans_has_played_for": all_teams_samuel_evans_has_played_for,
		"players_with_manitoba_tiger_cats": all_players_with_manitoba_tiger_cats,
		"former_players_of_wichita_vikings": all_former_players_of_wichita_vikings,
		"teams_jacob_gray_played_for_before_oregon_colts": all_teams_jacob_gray_played_for_before_oregon_colts,
		"joshuas_in_atlantic_federation_of_amateur_baseball_players": all_joshuas_in_atlantic_federation_of_amateur_baseball_players,
		"teams_with_12_or_more_players": all_teams_with_12_or_more_players,
		"players_and_team_count_sorted": all_players_and_team_count_sorted,
	}
	return render(request, "leagues/index2.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")