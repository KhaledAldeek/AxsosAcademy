from django.shortcuts import render, redirect
from .models import League, Team, Player
from leagues import models

from . import team_maker

def index(request):
	# BaseBall leagues:
	baseball_leagues = models.get_all_baseBall_leagus()
	women_leagues = models.get_all_women_leagues()
	hockies = models.get_hockeis()
	leagues_exclude_football = models.get_sport_other_than_football()
	conference_leagues = models.get_all_conference_leagues()
	atlantic_leagues = models.get_all_atlantic_region()
	teams_in_dallas = models.get_all_teams_in_dallas()
	raptors_teams = models.get_all_raptors_teams()
	all_teams_location_include_city = models.get_all_teams_location_include_city()
	all_teams_begins_with_T = models.get_all_teams_begins_with_T()
	all_teams_order_alphabetically_by_location = models.get_all_teams_order_alphabetically_by_location()
	all_teams_order_alphabetically_by_team_name = models.get_all_teams_order_alphabetically_by_team_name()
	every_player_with_lastname_Cooper = models.get_every_player_with_lastname_Cooper()
	every_player_with_firstname_Joshua = models.get_every_player_with_firstname_Joshua()
	Cooper_Joshua = models.question_15()
	Alexander_Wyatt = models.question_16()
	
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

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")